function printElement (box=new HTMLElement()) {
  let printableBox = window.open("", "", "width=700,height=650");
  printableBox.document.write(box.innerHTML);
  printableBox.document.close();
  printableBox.focus();
  printableBox.print();
  printableBox.close();
}

export default printElement;