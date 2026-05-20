"use client";
import "./globals.css";


import React, { useState } from "react";
import dynamic from "next/dynamic";
import NavBarAndSearchBar from "../components/NavBarAndSearchBar";
const HostTypeModal = dynamic(() => import("../components/HostTypeModal"), { ssr: false });
const LoginSignupModal = dynamic(() => import("../components/LoginSignupModal"), { ssr: false });
const LanguageModal = dynamic(() => import("../components/LanguageModal"), { ssr: false });

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    homes: "Homes", experiences: "Experiences", services: "Services", becomeHost: "Become a host",
    catalogTitle: "Experiences Catalog", sortByPrice: "Sort by price:", low: "Low", high: "High", loading: "Loading...",
    popularHomes: "Popular homes in Los Angeles", filteredBy: "Filtered by:", suggested: "Suggested Bookings", bookNow: "Book Now", amenities: "Amenities", about: "About this place", login: "Log in or sign up", welcome: "Welcome to Airbnb", countryCode: "Country code", continue: "Continue", or: "or", privacy: "Privacy Policy", hostPrompt: "What would you like to host?", home: "Home", experience: "Experience", service: "Service", selectLang: "Select Language"
  },
  es: {
    homes: "Casas", experiences: "Experiencias", services: "Servicios", becomeHost: "Hazte anfitrión",
    catalogTitle: "Catálogo de Experiencias", sortByPrice: "Ordenar por precio:", low: "Bajo", high: "Alto", loading: "Cargando...",
    popularHomes: "Casas populares en Los Ángeles", filteredBy: "Filtrado por:", suggested: "Reservas sugeridas", bookNow: "Reservar ahora", amenities: "Servicios", about: "Sobre este lugar", login: "Iniciar sesión o registrarse", welcome: "Bienvenido a Airbnb", countryCode: "Código de país", continue: "Continuar", or: "o", privacy: "Política de privacidad", hostPrompt: "¿Qué te gustaría hospedar?", home: "Casa", experience: "Experiencia", service: "Servicio", selectLang: "Seleccionar idioma"
  },
  fr: {
    homes: "Maisons", experiences: "Expériences", services: "Services", becomeHost: "Devenir hôte",
    catalogTitle: "Catalogue d'expériences", sortByPrice: "Trier par prix:", low: "Bas", high: "Haut", loading: "Chargement...",
    popularHomes: "Maisons populaires à Los Angeles", filteredBy: "Filtré par:", suggested: "Réservations suggérées", bookNow: "Réserver", amenities: "Équipements", about: "À propos de cet endroit", login: "Connexion ou inscription", welcome: "Bienvenue sur Airbnb", countryCode: "Indicatif du pays", continue: "Continuer", or: "ou", privacy: "Politique de confidentialité", hostPrompt: "Que souhaitez-vous héberger?", home: "Maison", experience: "Expérience", service: "Service", selectLang: "Choisir la langue"
  },
  de: {
    homes: "Häuser", experiences: "Erlebnisse", services: "Dienstleistungen", becomeHost: "Gastgeber werden",
    catalogTitle: "Erlebniskatalog", sortByPrice: "Nach Preis sortieren:", low: "Niedrig", high: "Hoch", loading: "Wird geladen...",
    popularHomes: "Beliebte Häuser in Los Angeles", filteredBy: "Gefiltert nach:", suggested: "Vorgeschlagene Buchungen", bookNow: "Jetzt buchen", amenities: "Ausstattung", about: "Über diesen Ort", login: "Anmelden oder registrieren", welcome: "Willkommen bei Airbnb", countryCode: "Ländercode", continue: "Fortfahren", or: "oder", privacy: "Datenschutzrichtlinie", hostPrompt: "Was möchten Sie anbieten?", home: "Haus", experience: "Erlebnis", service: "Dienstleistung", selectLang: "Sprache wählen"
  },
  it: {
    homes: "Case", experiences: "Esperienze", services: "Servizi", becomeHost: "Diventa host",
    catalogTitle: "Catalogo Esperienze", sortByPrice: "Ordina per prezzo:", low: "Basso", high: "Alto", loading: "Caricamento...",
    popularHomes: "Case popolari a Los Angeles", filteredBy: "Filtrato per:", suggested: "Prenotazioni suggerite", bookNow: "Prenota ora", amenities: "Servizi", about: "Informazioni su questo posto", login: "Accedi o registrati", welcome: "Benvenuto su Airbnb", countryCode: "Prefisso internazionale", continue: "Continua", or: "o", privacy: "Informativa sulla privacy", hostPrompt: "Cosa vuoi ospitare?", home: "Casa", experience: "Esperienza", service: "Servizio", selectLang: "Seleziona lingua"
  },
  zh: {
    homes: "房屋", experiences: "体验", services: "服务", becomeHost: "成为房东",
    catalogTitle: "体验目录", sortByPrice: "按价格排序:", low: "低", high: "高", loading: "加载中...",
    popularHomes: "洛杉矶热门房源", filteredBy: "筛选：", suggested: "推荐预订", bookNow: "立即预订", amenities: "设施", about: "关于此处", login: "登录或注册", welcome: "欢迎来到Airbnb", countryCode: "国家代码", continue: "继续", or: "或", privacy: "隐私政策", hostPrompt: "您想要托管什么？", home: "房屋", experience: "体验", service: "服务", selectLang: "选择语言"
  },
  ja: {
    homes: "ホーム", experiences: "体験", services: "サービス", becomeHost: "ホストになる",
    catalogTitle: "体験カタログ", sortByPrice: "価格で並べ替え:", low: "低い", high: "高い", loading: "読み込み中...",
    popularHomes: "ロサンゼルスの人気ホーム", filteredBy: "絞り込み：", suggested: "おすすめ予約", bookNow: "今すぐ予約", amenities: "設備", about: "この場所について", login: "ログインまたはサインアップ", welcome: "Airbnbへようこそ", countryCode: "国コード", continue: "続行", or: "または", privacy: "プライバシーポリシー", hostPrompt: "何をホストしますか？", home: "ホーム", experience: "体験", service: "サービス", selectLang: "言語を選択"
  },
  ko: {
    homes: "숙소", experiences: "체험", services: "서비스", becomeHost: "호스트 되기",
    catalogTitle: "체험 카탈로그", sortByPrice: "가격순 정렬:", low: "낮음", high: "높음", loading: "로딩 중...",
    popularHomes: "로스앤젤레스 인기 숙소", filteredBy: "필터: ", suggested: "추천 예약", bookNow: "지금 예약", amenities: "편의시설", about: "이 장소에 대하여", login: "로그인 또는 가입", welcome: "Airbnb에 오신 것을 환영합니다", countryCode: "국가 코드", continue: "계속", or: "또는", privacy: "개인정보 처리방침", hostPrompt: "무엇을 호스팅하시겠습니까?", home: "숙소", experience: "체험", service: "서비스", selectLang: "언어 선택"
  },
  pt: {
    homes: "Casas", experiences: "Experiências", services: "Serviços", becomeHost: "Torne-se um anfitrião",
    catalogTitle: "Catálogo de Experiências", sortByPrice: "Ordenar por preço:", low: "Baixo", high: "Alto", loading: "Carregando...",
    popularHomes: "Casas populares em Los Angeles", filteredBy: "Filtrado por:", suggested: "Reservas sugeridas", bookNow: "Reservar agora", amenities: "Comodidades", about: "Sobre este lugar", login: "Entrar ou cadastrar-se", welcome: "Bem-vindo ao Airbnb", countryCode: "Código do país", continue: "Continuar", or: "ou", privacy: "Política de Privacidade", hostPrompt: "O que você gostaria de hospedar?", home: "Casa", experience: "Experiência", service: "Serviço", selectLang: "Selecionar idioma"
  },
  ru: {
    homes: "Дома", experiences: "Впечатления", services: "Сервисы", becomeHost: "Стать хозяином",
    catalogTitle: "Каталог впечатлений", sortByPrice: "Сортировать по цене:", low: "Низкая", high: "Высокая", loading: "Загрузка...",
    popularHomes: "Популярные дома в Лос-Анджелесе", filteredBy: "Отфильтровано по:", suggested: "Рекомендуемые бронирования", bookNow: "Забронировать", amenities: "Удобства", about: "Об этом месте", login: "Войти или зарегистрироваться", welcome: "Добро пожаловать в Airbnb", countryCode: "Код страны", continue: "Продолжить", or: "или", privacy: "Политика конфиденциальности", hostPrompt: "Что вы хотите разместить?", home: "Дом", experience: "Впечатление", service: "Сервис", selectLang: "Выбрать язык"
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showHostType, setShowHostType] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState("en");
  const [showHamburger, setShowHamburger] = useState(false);

  // Handler to open host modal from nav
  const handleBecomeHost = () => setShowHostType(true);
  const handleLang = () => setShowLang(true);

  // Hide all content except modal when open
  const hideContent = showHostType || showLogin || showLang || showHamburger;

  // Get translations for current language
  const t = TRANSLATIONS[lang] || TRANSLATIONS["en"];

  return (
    <html lang={lang}>
      <body className="bg-gray-50 min-h-screen">
        <NavBarAndSearchBar
          onBecomeHost={handleBecomeHost}
          onLanguage={handleLang}
          disableContent={hideContent}
          t={t}
          onHamburger={() => setShowHamburger(true)}
          onHamburgerClose={() => setShowHamburger(false)}
        />
        {!hideContent && <main>{
          typeof children === 'object' && children && 'type' in children
            ? React.cloneElement(children as any, { lang, t })
            : children
        }</main>}
        {showHostType && (
          <HostTypeModal
            onSelect={() => {
              setShowHostType(false);
              setShowLogin(true);
            }}
            onClose={() => setShowHostType(false)}
            t={t}
          />
        )}
        {showLogin && (
          <LoginSignupModal onClose={() => setShowLogin(false)} t={t} />
        )}
        {showLang && (
          <LanguageModal
            current={lang}
            onSelect={(code: string) => {
              setLang(code);
              setShowLang(false);
            }}
            onClose={() => setShowLang(false)}
            t={t}
          />
        )}
      </body>
    </html>
  );
}
