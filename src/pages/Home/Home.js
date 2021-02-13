import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import img1 from '../../assets/images/img1.png'

const Home = (props) => {
    return (
        <div className="container">
            <div className="col-4">
                <CardImg top width="100%" src={img1} alt="Image" />
            </div>
            <div className="col-9">
                <CardBody>
                    <CardTitle tag="h5">Selamat datang di <span className="text-primary">Inventory App</span></CardTitle>
                    <CardText>
                        Aplikasi karya anak bangsa, membantu UMKM disekitar kita.
                    </CardText>
                    <button className="btn btn-outline-primary">Coba Sekarang</button>
                </CardBody>
            </div>
        </div>
    );
};

export default Home;
