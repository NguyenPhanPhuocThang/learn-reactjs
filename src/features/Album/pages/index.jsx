import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Cho Thứ Tư',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/e/9/1/4e911e3dab586d4795198e506c4627d8.jpg'
        },
        {
            id: 2,
            name: 'Valentine 2023',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/8/a/6/48a6bf4b9fd663c7a54a4ec53f01cc3a.jpg'
        },
        {
            id: 3,
            name: 'Chill Cùng Rap Việt',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/1/c/7/d1c7ab65a25406ba620fc16102156bf7.jpg'
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy!</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;