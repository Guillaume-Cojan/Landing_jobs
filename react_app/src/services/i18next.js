import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {

  en: { 
    translation: {
      app_name: "Landing Pay",
        // "select_language": "Select language",
        // "intro_app":"SALARY",
        // "intro_title": "Tech Professionals",
        // "intro_title_2": "Salary Benchmarking",
        // "intro_description": "Trusted data that you need to land a new job or make the right compensation decision with confidence",
        // "company":"Pay what your talent deserves. &nbsp; Make confident decisions with transparent salary data.",
        // "talent": "Stop guessing what you are worth. &nbsp;. Gain the insights needed to make the smartest career move decision",
        // "gain_salary_insights": "Gain Salary Insights",
        // "get_my_salary_estimates": "Get my Salary Estimates",
        // "survey_p": "Put the power of 'pay' into your hands",
        // "subscribe_title": "Do you want to receive regular information about salary and career trends?",
        // "subscribe_para": "Enter your email to receive updates."
    }
  },
  pt: {
    translation: {
      app_name: "Landing Pay",
    //   {
    //     "select_language": "Selecione o idioma",
    //     "intro_app":"SALARIO",
    //     "intro_title": "Benchmarking de Salários ",
    //     "intro_title_2": "no Mundo Tecnológico",
    //     "intro_description": "Tenha acesso a dados de confiança que o ajudarão a arranjar o trabalho que deseja ou a tomar decisões certas na hora de remunerar os seus empregados.",
    //     "company":"Pague o que a sua equipa merece. &nbsp; Tome as decisões certas com acesso a dados salariais transparentes.",
    //     "talent": "Deixe de tentar adivinhar o que merece ganhar. &nbsp; Tenha acesso a todos os dados que necessita para tomar a decisão mais correta.",
    //     "gain_salary_insights": "Tenha Acesso a Dados Salariais",
    //     "get_my_salary_estimates": "Obter Estimativa Salarial",
    //     "survey_p": "O poder negocial está nas suas mãos!",
    //     "subscribe-title": "Quer receber informações regulares sobre salários e carreiras?",
    //     "subscribe_para": "Insira o seu email e receba informação regularmente"
    // }
    }
  },
  fr: {
    translation: {
      app_name: "Landing Pay",
    //   {
    //     "select_language": "Selecione o idioma",
    //     "intro_app":"SALARIO",
    //     "intro_title": "Benchmarking de Salários ",
    //     "intro_title_2": "no Mundo Tecnológico",
    //     "intro_description": "Tenha acesso a dados de confiança que o ajudarão a arranjar o trabalho que deseja ou a tomar decisões certas na hora de remunerar os seus empregados.",
    //     "company":"Pague o que a sua equipa merece. &nbsp; Tome as decisões certas com acesso a dados salariais transparentes.",
    //     "talent": "Deixe de tentar adivinhar o que merece ganhar. &nbsp; Tenha acesso a todos os dados que necessita para tomar a decisão mais correta.",
    //     "gain_salary_insights": "Tenha Acesso a Dados Salariais",
    //     "get_my_salary_estimates": "Obter Estimativa Salarial",
    //     "survey_p": "O poder negocial está nas suas mãos!",
    //     "subscribe-title": "Quer receber informações regulares sobre salários e carreiras?",
    //     "subscribe_para": "Insira o seu email e receba informação regularmente"
    // }
    }
  }
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
      debug: true,
    },
  });

export default i18next;

const fallbackLng = ["en"];
const availableLanguages = ["en", "pt"];

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
  fr: {
    translation: translationFR
  }
};
i18n
  .use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng, // fallback language is english.

    detection: {
      checkWhitelist: true, // options for language detection
    },

    debug: false,

    whitelist: availableLanguages,

    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
