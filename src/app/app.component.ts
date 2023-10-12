import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  senderMessage = [];
  clientMessage = [];
  textareaValue = '';
  preiousClientMsg = ''
  startChat = 0
  clientChatClassName = "message-box-chat-client"
  senderChatClassName = "message-box-chat-sender"
  divLeftClassName = "message-box-left"
  divMessageListClassName = "message-list"
  divRightClassName = "message-box-right"
  empty = ""
  divmessageBoxChatSender= "message-box-chat-sender-div"
  defaultChatText = "Hi, Please select your query from below list"
  public type = [
    {id :"C001", text: "Account", parentId: "", haveChild: "Y"},
    {id :"C002", text: "Account modification and segment addition", parentId: "" , haveChild: "Y"},
    {id :"C003", text: "Order related", parentId: "" , haveChild: "Y"},
    {id :"C004", text: "Limits and Margins", parentId: "" , haveChild: "Y"},
    {id :"C005", text: "Investment", parentId: "" , haveChild: "Y"},
    {id :"C006", text: "Reports", parentId: "" , haveChild: "Y"},
    // C001
    {id :"C0015", text: "Account balance", parentId: "C001" , haveChild: "Y"},
    {id :"C0016", text: "Know your bo id /trading code", parentId: "C001" , haveChild: "Y"},
    {id :"C0017", text: "Download statement", parentId: "C001", haveChild: "N"},
    // C002
    {id :"C007", text: "Nomination", parentId: "C002", haveChild: "N"},
    {id :"C008", text: "Segment addition", parentId: "C002", haveChild: "N"},
    {id :"C009", text: "Change of mobile / email / Address", parentId: "C002", haveChild: "N"},
    {id :"C0010", text: "Bank addition", parentId: "C002", haveChild: "N" },
    {id :"C0011", text: "Name change", parentId: "C002", haveChild: "N"},
    {id :"C0012", text: "POA / DDPI", parentId: "C002", haveChild: "N"},
    
    {id :"C0013", text: "Rs 320504", parentId: "C0015", haveChild: "N" },
    {id :"C0014", text: "Your Bo id : 1202134567890", parentId: "C0016" , haveChild: "N"},
    // C003
    {id :"C0018", text: "Order placing - Call and trade no ", parentId: "C003", haveChild: "N" },
    // C004
    {id :"C0019", text: "RMS", parentId: "C004", haveChild: "N" },
    {id :"C0020", text: "Pledge / unpledge / MTF", parentId: "C004", haveChild: "N" },
    // C005
    {id :"C0021", text: "SGB", parentId: "C005", haveChild: "Y" },
    {id :"C0022", text: "IPO", parentId: "C005", haveChild: "Y" },
    {id :"C0023", text: "Portfolio", parentId: "C005", haveChild: "Y" },
    // C006
    {id :"C0024", text: "Equity", parentId: "C006", haveChild: "Y" },
    {id :"C0025", text: "MF", parentId: "C006", haveChild: "Y" },
    {id :"C0026", text: "Wealth", parentId: "C006", haveChild: "Y" },
    // C0026
    {id :"C0027", text: "IPO", parentId: "C0026", haveChild: "N" },
    {id :"C0028", text: "Bond", parentId: "C0026", haveChild: "N" },
    {id :"C0029", text: "Stock sip", parentId: "C0026", haveChild: "N" },
    {id :"C0030", text: "Ncd", parentId: "C0026", haveChild: "N" },
    {id :"C0031", text: "Nps", parentId: "C0026", haveChild: "N" },
    {id :"C0032", text: "Fd", parentId: "C0026", haveChild: "N" },
    // C0024
    {id :"C0033", text: "Client detail pnl statement", parentId: "C0024", haveChild: "N" },
    {id :"C0034", text: "fund transaction", parentId: "C0024", haveChild: "N" },
    {id :"C0035", text: "dp cum transaction", parentId: "C0024", haveChild: "N" },
     // C0025
     {id :"C0036", text: "Capital gain loss", parentId: "C0025", haveChild: "N"},
     {id :"C0037", text: "Client holding", parentId: "C0025", haveChild: "N" },
     {id :"C0038", text: "Elss", parentId: "C0025", haveChild: "N" },
     {id :"C0039", text: "Transaction", parentId: "C0025", haveChild: "N" },
     // C0021
     {id :"C0040", text: "How to apply for SGB - Mobile app - home page - SGB - Apply", parentId: "C0021", haveChild: "N" },
     // C0022
     {id :"C0041", text: "How to apply ipo - mobile app - Homepage - ipo - apply", parentId: "C0022", haveChild: "N" },
     // C0023
     {id :"C0042", text: "How to check portofolio - Homepage - portfolio - stocks", parentId: "C0023", haveChild: "N" },

];
  constructor() {
   
  }

  ngOnInit(){
    
  }

  loadMessage(parentId){
    this.senderMessage = []
    let divElement = this.createDivElement(this.divLeftClassName, this.empty)

    for(let i = 0; i < this.type.length; i++){
      if(this.type[i].parentId == parentId){
        let liElement = this.createListElement(this.type[i].text,this.senderChatClassName)

        if(this.type[i].haveChild == "Y"){
          liElement.addEventListener('click', (e) => {
            this.clickedMessage(this.type[i].id)
          })
        }else {
          liElement.style.cursor = "default"
        }
        divElement?.append(liElement)
        this.senderMessage.push(this.type[i].id)
      }
     }
     if (this.startChat == 0) {
        let divHeaderElement = this.createDivElement(this.divmessageBoxChatSender, this.defaultChatText)
        document.getElementById(this.divMessageListClassName).append(divHeaderElement)
      }
     document.getElementById(this.divMessageListClassName).append(divElement)

     this.startChat = this.startChat + 1
     if(this.senderMessage.length == 0){
      let pElement = document.createElement('p')
      pElement.innerHTML = 'opps no data found!'
      divElement.append(pElement)
     }
  }

  showClientMessage(id){
    if(this.preiousClientMsg != id) {
      let divElement = this.createDivElement(this.divRightClassName, this.empty)
      for(let i = 0; i < this.type.length; i++){
        if(this.type[i].id == id){
          divElement?.append(this.createListElement(this.type[i].text,this.clientChatClassName))
        }
      }
      document.getElementById(this.divMessageListClassName)?.append(divElement)
      this.loadMessage(id)
    }
    this.preiousClientMsg = id
  }

  createListElement(value,className){
    let liElement = document.createElement('li')
    liElement.innerHTML = value
    liElement.className = className
    return liElement
  }

  createDivElement(className, text){
    let divElement = document.createElement('div')
    divElement.innerHTML = text ? text : this.empty
    divElement.className = className
    return divElement
  }

  clickedMessage(id){
    this.showClientMessage(id)
  }

  sendMessage(){
      this.showClientSendMessage(this.textareaValue)
      this.loadMessage('')
  }

  showClientSendMessage(text){
    this.startChat = 0;

    let divElement = this.createDivElement(this.divRightClassName, this.empty)

    let liElement = this.createListElement(text,this.clientChatClassName)
    divElement?.append(liElement)

    document.getElementById(this.divMessageListClassName)?.append(divElement)
    this.textareaValue = ''
  }
}
