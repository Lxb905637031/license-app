import _ from 'lodash'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

interface IProps {
  btnTitle: string;
  path?: string;
  handleClick?: () => void;
}

const Button: FC<IProps> = ({
  btnTitle,
  path,
  handleClick
}) => {
  return (
    <div className="comfirm-btn">
      {
        handleClick
        ?
        <div 
          className="btn"
          onClick={ _.debounce(handleClick, 300) }
        >{ btnTitle }</div>
        :
        <Link
          className="btn"
          to={ path! }
        >{ btnTitle }</Link>
      }
    </div>
  );
}

export default Button