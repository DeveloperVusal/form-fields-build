import {init} from './components/init'

import './assets/css/app.scss'

import {WindowExtend} from "./__types__/window.type";


(window as WindowExtend).FormFieldsBuild = {
    init: init
}