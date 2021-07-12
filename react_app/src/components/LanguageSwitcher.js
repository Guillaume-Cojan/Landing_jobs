import React from "react";
import { useTranslation } from "react-i18next";


function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
  <div className = "select">
    <select
    value={i18n.language}
    onChange={(e) => i18n.changeLanguage(e.target.value)
    }
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
      <option value="fr">Français</option>
    </select>
  </div>
  )
}

export default LanguageSwitcher