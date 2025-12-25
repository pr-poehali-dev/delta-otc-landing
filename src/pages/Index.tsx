import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [language, setLanguage] = useState<"EN" | "RU">("EN");

  const content = {
    EN: {
      nav: {
        about: "About Us",
        services: "Our Services",
        risk: "Risk",
        faq: "FAQ",
        contact: "Get in Touch",
      },
      hero: {
        title: "Secure Crypto OTC Trading Hub",
        currencies: "Supported Currencies:",
        currencyList: "KZT, USD, RUB, AED, CNY",
        settlement: "Settlement within 8 hours",
        volume: "Transactions up to $50 million",
      },
      about: {
        title: "About Us",
        text: "Delta DA, established in 2021, specializes in Crypto Fiat OTC Services, providing a complete customized solution for secure cryptocurrency trading.",
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Trading Digital Assets",
            subtitle: "Perfect Execution",
            description: "Fast and reliable trading of major cryptocurrencies with competitive rates and deep liquidity.",
          },
          {
            title: "Supporting Customized Solutions",
            subtitle: "Client Needs Oriented",
            description: "Tailored OTC solutions designed to meet specific requirements of institutional and high-net-worth clients.",
          },
          {
            title: "Regulations",
            subtitle: "Operating as an agent",
            description: "See where the regulations and licensing from the Astana Financial Services Authority ensure compliance and security.",
          },
        ],
      },
      risk: {
        title: "Risk",
        text: "Cryptocurrency trading involves a high level of risk and may not be suitable for all investors. Ensure you understand the risks involved before proceeding.",
        disclaimer: "Our company does not provide investment advice. All decisions regarding the buying or selling of cryptocurrency are the sole responsibility of the investor.",
        button: "Learn More",
      },
      footer: {
        company: "Delta DA Ltd",
        email: "info@deltada.kz",
        address: "Astana, Kazakhstan",
      },
    },
    RU: {
      nav: {
        about: "О нас",
        services: "Услуги",
        risk: "Риски",
        faq: "FAQ",
        contact: "Связаться",
      },
      hero: {
        title: "Безопасная OTC-торговля криптовалютой",
        currencies: "Поддерживаемые валюты:",
        currencyList: "KZT, USD, RUB, AED, CNY",
        settlement: "Расчет в течение 8 часов",
        volume: "Транзакции до $50 млн",
      },
      about: {
        title: "О нас",
        text: "Delta DA, основанная в 2021 году, специализируется на OTC-услугах с криптовалютами, предоставляя комплексные решения для безопасной торговли криптовалютой.",
      },
      services: {
        title: "Наши услуги",
        items: [
          {
            title: "Торговля цифровыми активами",
            subtitle: "Идеальное исполнение",
            description: "Быстрая и надежная торговля основными криптовалютами по конкурентным ставкам с глубокой ликвидностью.",
          },
          {
            title: "Индивидуальные решения",
            subtitle: "Ориентация на клиента",
            description: "Персонализированные OTC-решения для институциональных клиентов и клиентов с высоким уровнем дохода.",
          },
          {
            title: "Регулирование",
            subtitle: "Работа в качестве агента",
            description: "Лицензирование Астанинского управления финансовых услуг обеспечивает соблюдение требований и безопасность.",
          },
        ],
      },
      risk: {
        title: "Риски",
        text: "Торговля криптовалютами сопряжена с высоким уровнем риска и может не подходить всем инвесторам. Убедитесь, что вы понимаете все риски перед началом работы.",
        disclaimer: "Наша компания не предоставляет инвестиционные консультации. Все решения о покупке или продаже криптовалюты являются исключительной ответственностью инвестора.",
        button: "Подробнее",
      },
      footer: {
        company: "Delta DA Ltd",
        email: "info@deltada.kz",
        address: "Астана, Казахстан",
      },
    },
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <header className="sticky top-0 z-50 glass-effect border-b border-white/20">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold gradient-text">Delta DA</div>
            
            <nav className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-[#0EA5E9] transition-all font-medium hover:scale-110 duration-200">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-[#0EA5E9] transition-all font-medium hover:scale-110 duration-200">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection("risk")} className="text-gray-700 hover:text-[#0EA5E9] transition-all font-medium hover:scale-110 duration-200">
                {t.nav.risk}
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-[#0EA5E9] transition-all font-medium hover:scale-110 duration-200">
                {t.nav.faq}
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setLanguage("EN")}
                  className={`px-4 py-2 rounded-lg transition-all font-semibold ${
                    language === "EN" ? "bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("RU")}
                  className={`px-4 py-2 rounded-lg transition-all font-semibold ${
                    language === "RU" ? "bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  RU
                </button>
              </div>
              <Button className="bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] hover:shadow-2xl hover:scale-105 text-white transition-all duration-300 px-6 py-6 text-base font-semibold">
                {t.nav.contact}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-32 px-6 mesh-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
              <span className="gradient-text">{t.hero.title}</span>
            </h1>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[#0EA5E9]/20 transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-semibold">{t.hero.currencies}</div>
                <div className="text-xl font-bold text-gray-900">{t.hero.currencyList}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[#33C3F0]/20 transition-all duration-300 hover:scale-105 border border-gray-100">
                <Icon name="Clock" className="mx-auto mb-3 text-[#0EA5E9]" size={32} />
                <div className="text-xl font-bold text-gray-900">{t.hero.settlement}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 hover:scale-105 border border-gray-100">
                <Icon name="TrendingUp" className="mx-auto mb-3 text-[#33C3F0]" size={32} />
                <div className="text-xl font-bold text-gray-900">{t.hero.volume}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 mb-16">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform">₿</div>
                <span className="text-base text-gray-700 font-medium">Bitcoin</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform">₮</div>
                <span className="text-base text-gray-700 font-medium">Tether</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform">$</div>
                <span className="text-base text-gray-700 font-medium">USD Coin</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform">Ξ</div>
                <span className="text-base text-gray-700 font-medium">Ethereum</span>
              </div>
            </div>

            <div className="relative w-80 h-80 mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] rounded-full opacity-20 blur-3xl animate-glow"></div>
              <div className="absolute inset-0 border-8 border-[#0EA5E9] rounded-full opacity-30"></div>
              <div className="absolute inset-12 border-8 border-[#33C3F0] rounded-full opacity-40"></div>
              <div className="absolute inset-24 bg-gradient-to-br from-[#0EA5E9] via-[#33C3F0] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-lg font-black tracking-wider">CRYPTO ⇄ FIAT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-6xl font-black text-gray-900 mb-8">{t.about.title}</h2>
          <p className="text-2xl text-gray-600 leading-relaxed font-light">
            {t.about.text}
          </p>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-6xl font-black text-center text-gray-900 mb-20">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {t.services.items.map((service, index) => (
              <Card key={index} className="border-none shadow-2xl hover:shadow-[#0EA5E9]/30 transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-gray-50 overflow-hidden group">
                <CardContent className="p-10 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0EA5E9]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon 
                      name={index === 0 ? "LineChart" : index === 1 ? "Users" : "Shield"} 
                      className="text-white" 
                      size={36} 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <div className="text-base text-[#0EA5E9] font-bold mb-4 uppercase tracking-wide">{service.subtitle}</div>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="risk" className="py-32 px-6 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-orange-100">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                <Icon name="AlertTriangle" className="text-white" size={36} />
              </div>
              <div>
                <h2 className="text-5xl font-black text-gray-900 mb-6">{t.risk.title}</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">{t.risk.text}</p>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">{t.risk.disclaimer}</p>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-2xl hover:scale-105 text-white transition-all duration-300 px-8 py-6 text-lg font-bold">
                  {t.risk.button}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-6xl font-black text-gray-900 mb-8">FAQ</h2>
          <p className="text-2xl text-gray-600 font-light">
            {language === "EN" ? "Have questions? Contact our support team." : "Есть вопросы? Свяжитесь с нашей службой поддержки."}
          </p>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0EA5E9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-12">
            <div>
              <div className="text-4xl font-black gradient-text mb-4">Delta DA</div>
              <p className="text-gray-400 text-lg">{t.footer.company}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2 text-lg">
                <Icon name="Mail" size={24} className="text-[#33C3F0]" />
                <span>{t.footer.email}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start text-lg">
                <Icon name="MapPin" size={24} className="text-[#33C3F0]" />
                <span>{t.footer.address}</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-base">
            © 2021-2025 Delta DA Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;