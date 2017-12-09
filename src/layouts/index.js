import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'bulma';
import './index.scss';

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="Blog by Zachary Friss JustDev.in"
      meta={[
        {
          name: 'description',
          content:
            "Zachary Friss's Blog on web development and software engineering",
        },
        {name: 'keywords', content: 'zachary friss blog'},
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
