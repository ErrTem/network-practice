import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://avatars.mds.yandex.net/get-altay/4054675/2a00000175698af2d652e4b83bf889f99812/XXXL' alt='xex'/>
            </div>
            <div className={s.descriptionBlock}>
                ava +description
            </div>
        </div>
    )
}

export default ProfileInfo