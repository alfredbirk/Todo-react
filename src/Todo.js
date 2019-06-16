import React from 'react'
import { Item } from './Item'
import posed from 'react-pose';
import { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';
import './styles.css';

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

const Lel = posed.li({
  enter: {
    opacity: 1,
    x:0,


  },
  exit: {
    x:100,
    opacity: 0,
    transition: { duration: 300 },
  }
 });

export class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          "name": "test1",
        },
        {
          "name": "test2"
        }
      ],
      val: "",
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);

    if (localStorage.hasOwnProperty("items")) {
      console.log("LAWL2");
       let value = localStorage.getItem("items");
       console.log(value);
       value = JSON.parse(value);
       this.setState({ items: value });
     }
  }

  handleChange = (e) => this.setState({
      val: e.target.value
    });

  handleSubmit = (e) => {
      const newItems = [...this.state.items, { name: this.state.val }]
      e.preventDefault();
      this.setState({
      items: newItems,
      val: ""
    })
    localStorage.setItem("items", JSON.stringify(newItems));
  }

  handleClick = (name) => {

    const filteredItems = this.state.items.filter(item => {
      return item.name !== name
    })

    this.setState({
      items: filteredItems
    })
    localStorage.setItem("items", JSON.stringify(filteredItems));
  }

  render() {

    const { isVisible } = this.state;

    const liste = this.state.items.map((item, i) =>
            <Lel key={i}>

            <Item key={i} name={item.name} handleClick={this.handleClick} />

            </Lel>
          )
    return (
      <div>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Todo list
        </SplitText>
        <hr className="hline" />
        <ul>
        <PoseGroup animateOnMount>
          {liste}
        </PoseGroup>
        </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.val} onChange={ this.handleChange } />
            <button style={{ backgroundColor:"orange", borderColor:"orange"}} type="submit"> Add </button>
          </form>
      </div>
    )
  }
}
