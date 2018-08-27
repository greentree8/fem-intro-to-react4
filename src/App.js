/**
 * Created by ugordda on 8/27/2018.
 */
const Pet = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h2", {id: props.name + props.animal + props.breed}, props.name),
		React.createElement("h3", {}, props.animal),
		React.createElement("h3", {}, props.breed)
	]);
}

	// just like App = new Function() {...}
	// this is a java "class"
	// these are called function component (stateless)
const App2 = () => { // this is a new component
		return React.createElement("div", { id: "example-id"}, [
			React.createElement("h1", {}, "Adopt Me!"),
			React.createElement(Pet, {
				name: "Luna",
				animal: "dog",
				breed: "Havanese"
			}),
			React.createElement(Pet,{
				name: "Pepper",
				animal: "bird",
				breed: "Cockatiel"
			}),
			React.createElement(Pet, {
				name: "Doink",
				animal: "cat",
				breed: "Siamese"
			})
			]
		)
	}
	// class component:
class App extends React.Component {
	handleTitleClick() {
		alert("you clikcec te title");
	}
	render() {
		return React.createElement("div", { id: "example-id"}, [
				React.createElement("h1", {onClick: this.handleTitleClick, id: "first"}, "Adopt Me!"),
				React.createElement(Pet, {
					name: "Luna",
					animal: "dog",
					breed: "Havanese"
				}),
				React.createElement(Pet,{
					name: "Pepper",
					animal: "bird",
					breed: "Cockatiel"
				}),
				React.createElement(Pet, {
					name: "Doink",
					animal: "cat",
					breed: "Siamese"
				})
			]
		)
	}
}
// this instantiates the "App" class.
ReactDOM.render(React.createElement(App), document.getElementById("root"))

