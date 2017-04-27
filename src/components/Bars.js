import React from 'react';
import Link from 'react-router/lib/Link';
import {Card, CardHeader, CardText, CardMedia,CardActions , FlatButton, CardTitle} from 'material-ui/Card';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Data from '../data/data';


const bars = Data.Data;
// const bars = {
// 	petanque: {
// 		name: 'La pétanque Bar',
// 		pos :[48.868184,2.386485],
// 		long : 2.386485,
// 		pinballName: 30
// 	},
// 	mauricette: {
// 		name: 'Jane yoo',
// 		pos :[48.868184,2.386485],
// 		pinballName: 29
// 	},
// 	chezwam: {
// 		name: 'John Doh',
// 		pos :[48.868184,2.386485],
// 		pinballName: 67
// 	}
// };

const position = [51.505, -0.09];
const stamenTonerTiles = 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';


class User extends React.Component {

	constructor() {
     super();
     this.state = {
       lat: 51.505,
       lng: -0.09,
       zoom: 12,
     };
   }

	render() {
		const position = [this.props.point.lat, this.props.point.long];
		return (
			<Card style={{margin: '0.4em', width: '32%', flex: '1 300px 0'}}>
				<CardHeader title={`N°: ${this.props.id}`}/>
				<Map center={position} zoom={this.state.zoom}>
	        <Marker position={position}>
	          <Popup>
	            <span>{this.props.nom}</span>
	          </Popup>
	        </Marker>
					<TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles} />
	      </Map>
				<CardMedia
		      overlay={<CardTitle title={this.props.nom} subtitle="One hell of a flipper" />}
		    ></CardMedia>
			</Card>
		);
	}
}

User.propTypes = {
	id: React.PropTypes.string,
	name: React.PropTypes.string
};

class Bars extends React.Component {
	constructor() {
		super();

		this.state = {
			bars: bars
		};
	}

	render() {
		let bars = {};

		if (this.props.params && this.props.params.id) {
			bars[this.props.params.id] = this.state.bars[this.props.params.id];
		} else {
			bars = this.state.bars;
		}

		const children = Object.keys(bars).map((u, i) => {
			return <User key={`${u}-${i}`} id={u} {...bars[i]}/>;
		});

		return (
			<div style={{
				display: 'flex',
				flexWrap:'wrap',
    		flexDirection: 'row',
    		justifyContent:'flex-start',
    		alignItems:'stretch'}}>{children}</div>
		);
	}
}

Bars.propTypes = {
	params: React.PropTypes.object
};

export default Bars;
