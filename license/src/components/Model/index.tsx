import React, { FC } from 'react'

import { models } from '../../data'
import { IModelData, MODELS } from '../../typings'

import './index.scss'

interface IProps {
  curModel: MODELS;
  setCurrentModel: (model: MODELS) => void;
  modelShow: boolean;
}

const Model: FC<IProps> = ({
  curModel,
  setCurrentModel,
  modelShow
}) => {
  return (
    <div className="model-panel">
      {
        modelShow && models.map((model: IModelData) => {
          return (
            <div className="item" key={ model.id }>
              <div
                className={ ['item-btn', model.id === curModel ? ' active' : ''].join('') }
                onClick={ () => setCurrentModel(model.id) }
              >
                { model.title }
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default Model