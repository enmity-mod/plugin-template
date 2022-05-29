import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';

const Typing = getByProps('startTyping');

const Patcher = create('silent-typing');

const SilentTyping: Plugin = {
   name: 'SilentTyping',
   authors: [
      {
         name: 'eternal',
         id: '263689920210534400'
      }
   ],

   onStart() {
      Patcher.instead(Typing, 'startTyping', () => { });
      Patcher.instead(Typing, 'stopTyping', () => { });
   },

   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(SilentTyping);