import React from 'react';
import Data from  '../data/Data';
import {Card, CardHeader, CardText, CardMedia,CardActions , FlatButton, CardTitle} from 'material-ui/Card';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


const stamenTonerTiles = 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

class Main extends React.Component {

	constructor() {
     super();
     this.state = {
       lat: 51.505,
       lng: -0.09,
       zoom: 12,
     };
   }
	render() {
		const markers = Data;
		const position = [this.state.lat, this.state.lng];

		const children = Object.keys(markers).map((u, i) => {
			return <Marker position={[markers.Data[i].point.lat, markers.Data[i].point.long]}>
				<Popup>
					<span>{markers.Data[i].nom}</span>
				</Popup>
			</Marker>;
		});

		return (
			<div>
				<Card>
					<CardHeader><h3>Welcome!</h3></CardHeader>
					<CardText style={{fontSize: '1em'}}>
						PinBall paris
						<ul>
							<li>On fait des trucs</li>
							<li>Service worker for caching and offline</li>
							<li>Application Shell powered by <a href="https://material-ui.com">material-ui</a></li>
							<li>Supporting PRPL pattern by webpack 2 code splitting</li>
							<li>Baked in ES2015, Optimized build and testing by ava and xo</li>
						</ul>
					</CardText>
					<Map center={position} zoom={this.state.zoom}>
						{children}
						<TileLayer attribution={stamenTonerAttr} url={stamenTonerTiles} />
					</Map>
				</Card>
			</div>
		);
	}
}

export default Main;
