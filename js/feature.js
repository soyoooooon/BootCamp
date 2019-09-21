import Panel from "../js/modules/FeatureObject.js";

(() => {
  console.log('link successful');

  let tabData = document.querySelector('#container').children,
      panelContent = document.querySelector('#description').children,
      panelImage = document.querySelector('#images img');

  function showPanelContents() {

    let newButtons = document.querySelectorAll('button');

    if (newButtons.childElementCount = 1 ) {
      newButtons.forEach(butt => {
        butt.classList.remove("active");
      });
    };

    let section = this.textContent;

    this.classList.toggle('active');
    console.log(this);

    panelImage.src = `images/${Panel[section].image}`;
    panelContent[0].textContent = Panel[section].heading;
    panelContent[1].textContent = Panel[section].text;

  }

  // loop
  for (let section in Panel) {
    console.log(section);

    let tabButton = document.createElement('button');

    tabButton.textContent = section;
    tabButton.addEventListener("click", showPanelContents);
    document.querySelector('#tabs').appendChild(tabButton);
  }

})();
