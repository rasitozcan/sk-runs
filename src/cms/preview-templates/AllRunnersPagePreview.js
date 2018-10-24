import React from 'react';
import PropTypes from 'prop-types';
import { AllRunnersPageTemplate } from '../../templates/allrunners-page';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AllRunnersPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
