import React from 'react';
import { Leaf, Cloud, TrendingUp, Globe, MapPin, Handshake, CircleDollarSign, ChevronRight, ArrowRight } from 'lucide-react';

interface EmissionsHeroContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  bannerImage: string;
}

interface EmissionsPageProps {
  content: EmissionsHeroContent;
}

export const EmissionsPage: React.FC<EmissionsPageProps> = ({ content }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container rounded-full mb-8 border border-outline-variant/30">
              <Leaf className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{content.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight leading-[1.1]">
              {content.title}
              <span className="block text-secondary mt-3">{content.subtitle}</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              {content.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary font-semibold px-8 py-3.5 rounded-full hover:bg-primary-container transition-colors flex items-center gap-2 shadow-md">
                {content.primaryButton}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-surface border-2 border-secondary text-secondary font-semibold px-8 py-3.5 rounded-full hover:bg-secondary-fixed transition-colors">
                {content.secondaryButton}
              </button>
            </div>
          </div>
          
          <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden bg-surface-container-high shadow-xl">
            <img 
              src={content.bannerImage} 
              alt="Agricultural fields with data overlay" 
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent mix-blend-multiply"></div>
            
            <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-surface/95 backdrop-blur-md border border-outline-variant/30 p-5 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center shrink-0">
                  <Cloud className="w-6 h-6 text-on-secondary-container fill-current" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Giảm phát thải ước tính</p>
                  <p className="text-2xl font-bold text-primary tracking-tight">-45,000 tấn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Integration Section */}
      <section className="bg-surface-container py-24 border-y border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 tracking-tight">Tích hợp Mục tiêu Phát triển Bền vững</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Hệ thống MRV của chúng tôi được thiết kế để đo lường và thúc đẩy trực tiếp các tác động tích cực đến kinh tế và môi trường, tuân thủ các tiêu chuẩn toàn cầu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-outline-variant/40 rounded-3xl p-10 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mb-8 rounded-xl overflow-hidden shadow-sm">
                <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg" alt="SDG 1" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Xóa đói giảm nghèo</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Tạo ra nguồn thu nhập mới cho nông dân thông qua việc bán tín chỉ carbon. Tăng cường sinh kế và khả năng phục hồi tài chính cho cộng đồng địa phương.
              </p>
              <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Tăng thu nhập trung bình 15%</span>
              </div>
            </div>
            
            <div className="bg-surface border border-outline-variant/40 rounded-3xl p-10 hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mb-8 rounded-xl overflow-hidden shadow-sm">
                <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg" alt="SDG 13" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Hành động vì khí hậu</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Triển khai công nghệ đo lường, báo cáo và xác minh (MRV) chính xác để giám sát việc giảm phát thải khí nhà kính trong chuỗi sản xuất nông nghiệp.
              </p>
               <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
                <Globe className="w-4 h-4" />
                <span>Giám sát chuẩn quốc tế</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Bento Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-primary mb-12 tracking-tight">Dự án & Cơ chế Trọng điểm</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project 1: TRVC */}
          <div className="lg:col-span-8 bg-surface border border-outline-variant/40 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm">
            <div className="md:w-2/5 h-64 md:h-auto relative shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAqVRbK-Hmwy6VGSZYYRQXjZlolI-z_ju529719EzvLEEda0M_FpiH7E17iSYJnI1F8bVVgpYg5N5jM-YzuzJTZnpn7yo_F8kRS5pBRu4obwQwBCPmm-evMBOEHNU5lSHMJGM97lzVmJttyZNwK2rGdqr8X1uh3GMaVyFnNpLnOV-FRq5V5u2IeYYqvRIP7PLojCTTBf1nYL32cMxAYVmaZ0h9-HkbQJcXH0wB0ZdJIiUN0bv9PlfSK-3KERjnveBIAWD5SEJBov0" 
                alt="Green rice terraces" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10 md:w-3/5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high/60 rounded-full mb-6 w-fit border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-xs font-bold text-on-surface uppercase tracking-wider">Dự án Đang triển khai</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4 tracking-tight">Dự án TRVC</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Chuyển đổi Chuỗi giá trị lúa gạo phát thải thấp, hướng tới sản xuất bền vững và nâng cao chất lượng hạt gạo khu vực Đồng bằng sông Cửu Long.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-on-surface">An Giang, Đồng Tháp, Kiên Giang</span>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-on-surface">Hỗ trợ bởi SNV và Australia DFAT</span>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-secondary hover:text-secondary-container transition-colors w-fit group">
                Xem chi tiết dự án 
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Project 2: Pay-for-Results */}
          <div className="lg:col-span-4 bg-primary-container rounded-3xl p-10 text-on-primary-container flex flex-col relative overflow-hidden shadow-sm">
             <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="2"/>
                <circle cx="100" cy="100" r="79" stroke="currentColor" strokeWidth="2"/>
                <circle cx="100" cy="100" r="59" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <CircleDollarSign className="w-12 h-12 mb-8 text-secondary-fixed" />
              <h3 className="text-2xl font-bold text-on-primary-container mb-4 tracking-tight">Cơ chế 'Pay-for-Results'</h3>
              <p className="text-on-primary-container/80 mb-10 leading-relaxed flex-1">
                Hệ thống chi trả dựa trên kết quả thực tế. Nền tảng MRV hợp tác cùng <strong>Regrow</strong> giúp giám sát chính xác mức độ giảm phát thải và tự động phân bổ phần thưởng tài chính minh bạch thông qua blockchain.
              </p>
              
              <div className="pt-6 border-t border-on-primary-container/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-on-primary-container/60">Đối tác công nghệ</span>
                  <span className="text-2xl font-bold tracking-tight text-white">Regrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
