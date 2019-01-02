// const siteApi = "http://localhost:8000";
const siteApi = "";
export const registrationUrl = `${siteApi}/api/registration/`;
export const callbackUrl = `${siteApi}/api/callback/`;
export const sharesUrl = `${siteApi}/shares/api/current/shares/`;
export const shareUrl = `${siteApi}/shares/api/current/share`;
export const personalRoomUrl = `${siteApi}/personal_room/api`;
export const businessUrl = "http://biznesvinet.online/";
export const baseRegistrationConversion = "AW-807007303/4ehoCIf-vYEBEMfo54AD";
export const siteThemes = {
  white: {
    id: "white",
    topBottomBackgroundColor: "#fff",
    contactIconStyle: "green",
    bannerType: "catalog", // or decorative
    logoColor: "#333",
    conversionId: "AW-807007303/dcSwCIDvyIEBEMfo54AD"
  },
  black: {
    id: "black",
    topBottomBackgroundColor: "#333333",
    contactIconStyle: "pink",
    bannerType: "catalog",
    logoColor: "#ffffff",
    conversionId: "AW-807007303/grgpCKDu3YEBEMfo54AD"
  },
  green: {
    id: "green",
    topBottomBackgroundColor: "#CFDD93",
    contactIconStyle: "green",
    bannerType: "catalog",
    logoColor: "#333",
    conversionId: "AW-807007303/VQh8CP2W2IEBEMfo54AD"
  },
  pink: {
    id: "pink",
    topBottomBackgroundColor: "#fff",
    contactIconStyle: "#FA8BC4",
    bannerType: "decorative",
    logoColor: "#333",
    conversionId: ""
  }
};

export const siteThemesKeys = Object.keys(siteThemes);

export default siteApi;
