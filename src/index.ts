import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import Manifest from "./manifest.json";

const Typing = getByProps('startTyping');

const Patcher = create('silent-typing');

const SilentTyping: Plugin = {
   ...Manifest,

   onStart() {
      Patcher.instead(Typing, 'startTyping', () => { });
      Patcher.instead(Typing, 'stopTyping', () => { });
   },

   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(SilentTyping);
