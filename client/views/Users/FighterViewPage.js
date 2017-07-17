import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {Progress} from 'reactstrap';
import axios from "axios";
import {host} from "../../global"
import UserAvatar from 'react-user-avatar'
import Spinner from "../Components/Spinners/Spinner";
import {fetchCountries} from "../../actions/CountriesActions";
import moment from 'moment';

@connect((store) => {
    return {countries: store.Countries.countries};
})
export default class FighterViewPage extends Component {
    constructor(props) {
        super(props);

        this.dispatchFetchFighter = this
            .dispatchFetchFighter
            .bind(this);
        this.state = {
            fetching: true
        };
    }

    componentWillMount() {
        this.dispatchFetchFighter();
        this.dispatchFetchCountries();
    }

    dispatchFetchFighter() {
        const fighterId = this.props.match.params.id;

        var self = this;

        axios
            .get(host + "api/users/fighters/" + fighterId)
            .then((response) => {
                self.setState({fetching: false, fighter: response.data});
            })
            .catch((err) => {
                self.setState({fetching: false, error: err});
            });
    }

    dispatchFetchCountries() {
        if (this.props.countries.length == 0) {
            this
                .props
                .dispatch(fetchCountries());
        }
    }

    render() {
        const {fetching, fighter} = this.state;

        if (fetching) {
            return (<Spinner/>);
        }
        if (!fetching && this.state.fighter == undefined) {
            return (
                <div></div>
            );
        }

        const titleTextSyle = {
            color: '#697078'
        }

        const gender = fighter.gender == 'male'
            ? <h6 style={titleTextSyle}>
                    <i class="fa fa-mars" aria-hidden="true"></i>&nbsp; Male</h6>
            : <h6 style={titleTextSyle}>
                <i class="fa fa-venus" aria-hidden="true"></i>&nbsp; Female</h6>;

        const userName = (fighter.firstname || 'No name') + ' ' + (fighter.surname || '');
        return <div className="animated fadeIn">

            <div className="card">
                <div className="card-header">
                    <strong>Fighter</strong>
                    <div class="pull-right">
                        <Link to={this.props.match.url + '/edit'}>
                            <i class="fa fa-pencil" aria-hidden="true">&nbsp;Edit</i>
                        </Link>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row">
                        <div className="col-12 col-md-auto col-sm-6">
                            <UserAvatar size="150" name={fighter.firstname || fighter.email}/>
                            <div class="caption">
                                <button type="button" class="btn btn-link">
                                    <i class="fa fa-pencil"></i>&nbsp; Change photo
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-sm-6">
                            <div class="page-header">
                                <h2>{userName}
                                </h2>
                                <a href={'mailto:' + fighter.email}>
                                    {fighter.email}</a>
                            </div>

                            <h6 style={titleTextSyle}>
                                <i class="fa fa-birthday-cake" aria-hidden="true"></i>&nbsp; {moment(fighter.birthdate).format("YYYY-MM-DD")}
                            </h6>
                            {gender}
                            {fighter.phone && <h6 style={titleTextSyle}>
                                <i class="fa fa-1x fa-phone" aria-hidden="true"></i>&nbsp; {fighter.phone}
                            </h6>
                            }
                            {fighter.countryName && <h6 style={titleTextSyle}>
                                <i class="fa fa-globe" aria-hidden="true"></i>&nbsp;
                                <b>
                                    {fighter.countryName}</b>, {fighter.nationality}
                            </h6>
                            }
                        </div>

                        <div className="col-12 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col align-self-end">
                                    <div className="card">
                                        <div className="card-block p-3 clearfix">
                                            <i className="fa fa-trophy bg-success p-3 font-2xl mr-3 float-left"></i>
                                            <div className="h5 text-primary mb-0 mt-2">23</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs">wins</div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col align-self-end">
                                    <div className="card">
                                        <div className="card-block p-3 clearfix">
                                            <i className="fa fa-frown-o bg-danger p-3 font-2xl mr-3 float-left"></i>
                                            <div className="h5 text-primary mb-0 mt-2">1</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs">defeats</div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <button type="button" className="btn  btn-facebook">
                                    <span>Facebook</span>
                                </button>&nbsp;
                                <button type="button" className="btn  btn-twitter">
                                    <span>Twitter</span>
                                </button>&nbsp;
                                <button type="button" className="btn btn-instagram">
                                    <span>Instagram</span>
                                </button>&nbsp;
                                <button type="button" className="btn  btn-vk">
                                    <span>VK</span>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    }
}