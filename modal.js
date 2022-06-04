
var body = document.querySelector("#body");



var modalBack = document.createElement("div");
modalBack.setAttribute("class", "modal-back");
	
var modal = document.createElement("div");
modal.setAttribute("class", "modal");

var modalText = document.createElement("p");
modalText.setAttribute("class", "modal-text");
modalText.textContent = "Вы зашли на проект “Счетчик калорий”, созданный в практических целях для добавления в портфолио шо бы заказчик думал шо я не дурачок и сделаю ему работу:)";

var modalText2 = document.createElement("p");
modalText2.textContent = "Нажмите за пределами этого окна чтобы закрыть его";

body.appendChild(modalBack);
modalBack.appendChild(modal);
modal.appendChild(modalText);
modal.appendChild(modalText2);

var mb = document.querySelector(".modal-back");
mb.onclick = function(){
	mb.remove();
}
