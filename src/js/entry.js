require('../css/index.less')
var React = require("react"),
    ReactDom = require("react-dom");


var Mask = React.createClass({
    getDefaultProps:function () {
        return {
            style:{
                opacity:0.5,
                background :"pink",
                display:'none',
                position:'absolute',
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px'
            }
        }
    },
    render:function (){
        var oStyle = Object.assign({},this.props.style);
        if(this.props.Oflag){
           oStyle.display = 'block'; 
        }
        console.log(this.props.Oflag)
        return (
            <div style={oStyle} className = {"mask"} >
                {this.props.children}
            </div>
        )
    }
})

var Info = React.createClass({
    getDefaultProps:function(){
        return{
            message:"Hello",
            message1:"world!",
            style:{
                height:'20%',
                width:'100%',
                position:'absolute',
                left:'50%',
                top:'50%',
                transform:"translateX(-50%) translateY(-50%)",
                color:'red',
                background:'blue',
                textAlign:'center'
            }
        }
    },
    render:function () {
        return (
            <div style = {this.props.style} className={'info'} onClick = {this.props.useFatherState}>
                <h1>{this.props.message}</h1>
                <h3>{this.props.message1}</h3>
            </div>
        )
    }
})

var Btn = React.createClass({
    getInitialState:function(){
        return {
            open:false,
        }
    },
    onChangeState:function(){
       var flag = ! this.state.open;
       this.setState({
           open:flag,
       })
    },
    getDefaultProps:function(){
        return {
            style :{
                    position:'absolute',
                    left: '0px',
                    right: '0px',
                    top: '0px',
                    bottom: '0px'
            },
            btnStyle:{
                postion:'absolute',
                display:'inline'
            }
        }
    },
    render:function(){
        return(
            <div style= {this.props.style}>
                <button style= {this.btnStyle} onClick={this.onChangeState}>showInfo</button> 
                <Mask Oflag = {this.state.open}>
                    <Info useFatherState = {this.onChangeState}></Info>
                </Mask>                   
            </div>
        )
    }
})
ReactDom.render(
    <Btn/>,
    document.getElementById('demo')
)
