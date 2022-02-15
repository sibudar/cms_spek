/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Button } from '@strapi/design-system/Button';
import { ThemeProvider } from '@strapi/design-system/ThemeProvider';
import { lightTheme } from '@strapi/design-system/themes';
import { Combobox, ComboboxOption } from '@strapi/design-system/Combobox';
import  { useEffect, useState } from "react";
import { Textarea } from '@strapi/design-system/Textarea';
import { Box } from '@strapi/design-system/Box';
import { Tooltip } from '@strapi/design-system/Tooltip';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { BaseHeaderLayout, HeaderLayout } from '@strapi/design-system/Layout';
import MyEmailPlugin  from '../../components/email'

const HomePage = () => {

  const [value, setValue] = useState('');
  const [content, setContent] = useState('');



  return <MyEmailPlugin/>;

};

export default memo(HomePage);
