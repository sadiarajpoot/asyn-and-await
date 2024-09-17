let myINFO = () => {
	return new Promise((resolved,rejected) => {
		let carPayment = "20lacs";
		if (carPayment) {
			console.log("Your Car Price is 20lacs");
			setTimeout(() => {
				resolved("Congratuation!! Here is your Car..");
			},2000)
		} else {
			console.log("You dont have enough money");
			setTimeout(() => {
				rejected("Sufficient Balance");
			})
			console.log("SORRY....");
		}
	})
}
function washing(cb: () => void) {
	console.log("washing is in process");
	setTimeout(() => {
		console.log("washing completed");
		cb()
	},2000)
}
function socking(cb: () => void) {
	console.log("socking in process");
	setTimeout(() => {
		console.log("socking completed")
		cb()
	},3000)
}
function dying(cb: () => void) {
	console.log("dying is in process");
	setTimeout(() => {
		console.log("dying completed");
	cb()
	},4000)
}
washing(() => {
	socking(() => {
		dying(() => {
		})
	})
})
function makePizza(cb:()=>void) {
	console.log("dough is in process");
	setTimeout(() => {
		console.log("dough ready");
		cb()
	},2000)
}
function add_ingredients (cb:()=>void) {
	console.log("");
	
}