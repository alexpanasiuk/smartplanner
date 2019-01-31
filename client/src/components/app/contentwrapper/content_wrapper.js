import React from 'react';
import ContentProjectContainer from '../../../containers/app/contentproject';
import css from './content_wrapper.module.css';

const ContentWrapper = (props) => {
    const chooseContentType = () => {
        switch (props.contentType) {
            case 'PROJECT':
                return <ContentProjectContainer
                            user={props.user}
                            project={props.content}
                        />

            default:
                return null;
        }
    }

    return (
        <div className={css.content}>
            {chooseContentType()}
        </div>   
    )
}

export default ContentWrapper;