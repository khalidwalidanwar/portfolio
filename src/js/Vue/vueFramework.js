const VueFrame = new Vue({
  el: "#app",
  data: {
    headerPages: [
      "Home",
      "About",
      "Certifications",
      "Skills",
      "Projects",
      "Contact Us",
    ],
    activePage: "Home",
    curentYear: new Date().getFullYear(),
    myAge: new Date().getFullYear() - 2007,
    mySkills: {
      HTML: "98%",
      CSS: "85%",
      SASS: "84%",
      JavaScript: "90%",
      Vue: "75%",
      Python: "70%",
      Php: "40%",
    },
    fName: "",
    lName: "",
    email: "",
    phone: "",
    massege: "",
  },
  methods: {
    goToTop: () => {
      window.scrollTo(0, 0);
    },
    sendMail: () => {
      if (
        VueFrame["_data"].fName != "" &&
        VueFrame["_data"].lName != "" &&
        VueFrame["_data"].email != "" &&
        VueFrame["_data"].massege != ""
      ) {
        $(".notification")[0].innerHTML = `
      <div class="alert alert-info alert-dismissible fade show text-center" role="alert">
        <b>Email Has Sent ..</b>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `;
      }
    },
  },
});

export default VueFrame;
