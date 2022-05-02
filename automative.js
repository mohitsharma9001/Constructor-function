const modal = {
    name : "ford eco-sport",
    modals : 2022,
    wheels :"Aloy wheels",
    sportMode :"Yes" 
    }

    let modal1 = Object.create(modal)
    this.name = "Tata nexon"
    // console.log(this.name)

    function newModal(){
        this.name = "ford eco-sport",
    this.modal = 2022,
    this.wheels ="Aloy wheels",
    this.sportMode ="Yes" 
    }

  let newModal2 = new newModal()
    newModal2.modals = 2050;
    newModal2.wheels = "MRF tyres"
    console.log(newModal2)