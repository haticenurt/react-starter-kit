import i18n  from "i18next";
import { initReactI18next, Translation } from "react-i18next";

const resources={
tr:{
 Translation:{
    welcome:'hoşgeldin!'
 }
},
en:{
    Translation:{
        welcome:'welcome!'
     }
}
}

i18n
.use(initReactI18next)
.init({
    lng:'tr',
    resources
})
export default i18n;