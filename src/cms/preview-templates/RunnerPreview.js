import React from 'react';
import PropTypes from 'prop-types';
import { RunnerTemplate } from '../../templates/runner';

const RunnerPreview = ({ entry, widgetFor }) => (
  <RunnerTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    name={entry.getIn(['data', 'name'])}
    photo={entry.getIn(['data', 'photo'])}
  />
);

RunnerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default RunnerPreview;
