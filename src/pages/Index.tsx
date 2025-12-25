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
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#0EA5E9]">Delta DA</div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-[#0EA5E9] transition-colors font-medium">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-[#0EA5E9] transition-colors font-medium">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection("risk")} className="text-gray-600 hover:text-[#0EA5E9] transition-colors font-medium">
                {t.nav.risk}
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-[#0EA5E9] transition-colors font-medium">
                {t.nav.faq}
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage("EN")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    language === "EN" ? "bg-white text-[#0EA5E9] shadow-sm" : "text-gray-600"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("RU")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    language === "RU" ? "bg-white text-[#0EA5E9] shadow-sm" : "text-gray-600"
                  }`}
                >
                  RU
                </button>
              </div>
              <Button className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white">
                {t.nav.contact}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {t.hero.title}
            </h1>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">{t.hero.currencies}</div>
                <div className="font-semibold text-gray-900">{t.hero.currencyList}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <Icon name="Clock" className="mx-auto mb-2 text-[#0EA5E9]" size={24} />
                <div className="font-semibold text-gray-900">{t.hero.settlement}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <Icon name="TrendingUp" className="mx-auto mb-2 text-[#0EA5E9]" size={24} />
                <div className="font-semibold text-gray-900">{t.hero.volume}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">₿</div>
                <span className="text-sm text-gray-600">Bitcoin</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">₮</div>
                <span className="text-sm text-gray-600">Tether</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">$</div>
                <span className="text-sm text-gray-600">USD Coin</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">Ξ</div>
                <span className="text-sm text-gray-600">Ethereum</span>
              </div>
            </div>

            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 border-4 border-[#0EA5E9] rounded-full opacity-20"></div>
              <div className="absolute inset-8 border-4 border-[#33C3F0] rounded-full opacity-30"></div>
              <div className="absolute inset-16 bg-gradient-to-br from-[#0EA5E9] to-[#33C3F0] rounded-full flex items-center justify-center">
                <div className="text-white text-sm font-bold">CRYPTO ⇄ FIAT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.about.text}
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#33C3F0] rounded-lg flex items-center justify-center mb-4">
                    <Icon 
                      name={index === 0 ? "LineChart" : index === 1 ? "Users" : "Shield"} 
                      className="text-white" 
                      size={24} 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-sm text-[#0EA5E9] font-semibold mb-3">{service.subtitle}</div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="risk" className="py-20 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="AlertTriangle" className="text-orange-600" size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.risk.title}</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{t.risk.text}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{t.risk.disclaimer}</p>
                <Button variant="outline" className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white">
                  {t.risk.button}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">FAQ</h2>
          <p className="text-lg text-gray-600">
            {language === "EN" ? "Have questions? Contact our support team." : "Есть вопросы? Свяжитесь с нашей службой поддержки."}
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-2xl font-bold text-[#33C3F0] mb-4">Delta DA</div>
              <p className="text-gray-400">{t.footer.company}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Icon name="Mail" size={18} />
                <span>{t.footer.email}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Icon name="MapPin" size={18} />
                <span>{t.footer.address}</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2021-2025 Delta DA Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
