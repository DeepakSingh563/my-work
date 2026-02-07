const exp = document.querySelector(".expense");
const prc = document.querySelector(".price");
const btn = document.querySelector(".addbtn");
const lst = document.querySelector(".lst");
const tl = document.querySelector("#total");
let expenses = JSON.parse(localStorage.getItem("expense")) || [];

function save() {
  localStorage.setItem("expense", JSON.stringify(expenses));
}

function render() {
  lst.innerHTML = "";
  let total = 0;
  expenses.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price} <button class="removebtn">Remove</button>`;
    li.querySelector("button").onclick = () => {
      expenses.splice(index, 1);
      save();
      render();
    };
    lst.appendChild(li);
    total += item.price;
  });
  tl.textContent = total;
}

btn.addEventListener("click", () => {
  const expense = exp.value.trim();
  const price = Number(prc.value);

  //remove button create
  // const remove =document.createElement("button");
  // remove.innerText="Remove";
  // remove.className ="removebtn";

  if (expense === "" || price <= 0) return;
  expenses.push({name : expense, price });
  save();
  render();
  exp.value = "";
  prc.value = "";

  //list create
  // const item=document.createElement("li");
  // item.textContent = `${expense} - ${price}`;

  // remove.addEventListener("click", () =>{
  //     total -= price;
  //     tl.textContent=total;
  //     item.remove();
  // });

  // item.appendChild(remove);
  // lst.appendChild(item);

  // total += price;
  // tl.textContent=total;

  // exp.value ="";
  // prc.value ="";
});
render();
