import React from 'react';
import DocumentTitle from 'react-document-title';


export default ({ data, pageData, params, utils }) => {
  return (
    <DocumentTitle title={`${params.demo} - ${params.name}`}>
      {
      	utils.toReactComponent(pageData.preview)
      }
    </DocumentTitle>
  );
};
