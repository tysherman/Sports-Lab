// Deafault App component that all other compents are rendered through
const sjLogo = <img src="images\sjearthquakespic.jpg" />
const laLogo = <img src="images\lagalaxypic.jpg" />
const ssLogo = <img src="images\sounderslogo.png" />
const hdLogo = <img src="images\dynamologo.png" />

class Team extends React.Component {
	state = {
		shotsTaken: 0,
		score: 0,
	}

	shoot = () => {
		const randomNum = Math.floor(Math.random() * 10)
		const heShoots = new Audio("soundEffects\\soccerballkick.mp3")
		const heScores = new Audio("soundEffects\\cheeringcrowd.mp3")
		this.setState((state) => ({
			shotsTaken: state.shotsTaken + 1,
		}))

		if (randomNum % 4 === 0) {
			this.setState((state) => ({
				score: state.score + 1,
			}))
			heScores.play()
		} else {
			heShoots.play()
		}
	}

	render() {
		return (
			<div>
				<p>{this.props.logo}</p>
				<h1>{this.props.name}</h1>
				<h4>Shots On Goal: {this.state.shotsTaken}</h4>
				<h4>Score: {this.state.score}</h4>
				{this.state.shotsTaken ? (
					<h4>
						Shot Percentage:{" "}
						{Math.floor((this.state.score / this.state.shotsTaken) * 100)}%
					</h4>
				) : null}
				<button onClick={this.shoot}>Take a shot!</button>
			</div>
		)
	}
}

class Game extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to {this.props.venue}</h1>
				<div className="faceoff">
					<Team name={this.props.home.name} logo={this.props.home.logo} />
					<Team name={this.props.away.name} logo={this.props.away.logo} />
				</div>
			</div>
		)
	}
}

function App(props) {
	const earthquakes = {
		name: "San Jose Earthquakes",
		logo: sjLogo,
	}
	const galaxy = {
		name: "LA Galaxy",
		logo: laLogo,
	}
	const sounders = {
		name: "seattle sounders",
		logo: ssLogo,
	}
	const dynamos = {
		name: "Houston Dynamo",
		logo: hdLogo,
	}
	return (
		<div>
			<Game venue="Earthquakes Stadium" home={earthquakes} away={galaxy} />
			<Game venue="Lumen Field" home={sounders} away={dynamos} />
		</div>
	)
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"))
