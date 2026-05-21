import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentPath = path.join(__dirname, 'data', 'site-content.json');

app.get('/api/content', async (_req, res) => {
  try {
    const content = await fs.readFile(contentPath, 'utf-8');
    res.json(JSON.parse(content));
  } catch (error) {
    res.status(500).json({ message: 'Cannot read content', error });
  }
});

app.put('/api/content', async (req, res) => {
  try {
    await fs.writeFile(contentPath, JSON.stringify(req.body, null, 2), 'utf-8');
    res.status(200).json({ message: 'Content updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Cannot update content', error });
  }
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log(`CMS API running at http://localhost:${port}`);
});
