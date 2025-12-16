"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Components", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.Components;
  }
});
Object.defineProperty(exports, "Constants", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.Constants;
  }
});
Object.defineProperty(exports, "concatMiddleware", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.concatMiddleware;
  }
});
Object.defineProperty(exports, "connectToWebChat", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.connectToWebChat;
  }
});
Object.defineProperty(exports, "createBrowserWebSpeechPonyfillFactory", {
  enumerable: true,
  get: function get() {
    return _createBrowserWebSpeechPonyfillFactory.default;
  }
});
exports.createDirectLineAppServiceExtension = exports.createDirectLine = void 0;
Object.defineProperty(exports, "createStore", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.createStore;
  }
});
Object.defineProperty(exports, "createStoreWithDevTools", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.createStoreWithDevTools;
  }
});
Object.defineProperty(exports, "createStyleSet", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.createStyleSet;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "hooks", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatComponent.hooks;
  }
});
exports.renderWebChat = void 0;
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _botframeworkWebchatCore.version;
  }
});

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _botframeworkWebchatCore = require("botframework-webchat-core");

var _botframeworkWebchatComponent = _interopRequireWildcard(require("botframework-webchat-component"));

var _addVersion = _interopRequireDefault(require("./addVersion"));

var _renderWebChat = _interopRequireDefault(require("./renderWebChat"));

var _createBrowserWebSpeechPonyfillFactory = _interopRequireDefault(require("./createBrowserWebSpeechPonyfillFactory"));

var _createDirectLine = _interopRequireDefault(require("./createDirectLine"));

var _createDirectLineAppServiceExtension = _interopRequireDefault(require("./createDirectLineAppServiceExtension"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var renderWebChat = _renderWebChat.default.bind(null, _botframeworkWebchatComponent.default);

exports.renderWebChat = renderWebChat;

var createDirectLine = function createDirectLine(options) {
  options.botAgent && console.warn('Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.');
  return (0, _createDirectLine.default)(_objectSpread(_objectSpread({}, options), {}, {
    botAgent: "WebChat/".concat(_botframeworkWebchatCore.version, " (Minimal)")
  }));
};

exports.createDirectLine = createDirectLine;

var createDirectLineAppServiceExtension = function createDirectLineAppServiceExtension(options) {
  options.botAgent && console.warn('Web Chat: Developers are not currently allowed to set botAgent in the createDirectLine function. See https://github.com/microsoft/BotFramework-WebChat/issues/2119 for more details.');
  return (0, _createDirectLineAppServiceExtension.default)(_objectSpread(_objectSpread({}, options), {}, {
    botAgent: "WebChat/".concat(_botframeworkWebchatCore.version, " (Minimal)")
  }));
};

exports.createDirectLineAppServiceExtension = createDirectLineAppServiceExtension;
var _default = _botframeworkWebchatComponent.default;
exports.default = _default;
// Until we have a development-specific bundle, we are not shipping createStoreWithDevTools in bundle.
window['WebChat'] = _objectSpread(_objectSpread({}, window['WebChat']), {}, {
  concatMiddleware: _botframeworkWebchatComponent.concatMiddleware,
  connectToWebChat: _botframeworkWebchatComponent.connectToWebChat,
  Constants: _botframeworkWebchatCore.Constants,
  createBrowserWebSpeechPonyfillFactory: _createBrowserWebSpeechPonyfillFactory.default,
  createDirectLine: createDirectLine,
  createDirectLineAppServiceExtension: createDirectLineAppServiceExtension,
  createStore: _botframeworkWebchatCore.createStore,
  createStyleSet: _botframeworkWebchatComponent.createStyleSet,
  hooks: _botframeworkWebchatComponent.hooks,
  ReactWebChat: _botframeworkWebchatComponent.default,
  renderWebChat: renderWebChat
});
(0, _addVersion.default)('minimal');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZW5kZXJXZWJDaGF0IiwiY29yZVJlbmRlcldlYkNoYXQiLCJiaW5kIiwiUmVhY3RXZWJDaGF0IiwiY3JlYXRlRGlyZWN0TGluZSIsIm9wdGlvbnMiLCJib3RBZ2VudCIsImNvbnNvbGUiLCJ3YXJuIiwiZGVmYXVsdENyZWF0ZURpcmVjdExpbmUiLCJ2ZXJzaW9uIiwiY3JlYXRlRGlyZWN0TGluZUFwcFNlcnZpY2VFeHRlbnNpb24iLCJkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZUFwcFNlcnZpY2VFeHRlbnNpb24iLCJ3aW5kb3ciLCJjb25jYXRNaWRkbGV3YXJlIiwiY29ubmVjdFRvV2ViQ2hhdCIsIkNvbnN0YW50cyIsImNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnkiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVN0eWxlU2V0IiwiaG9va3MiLCJhZGRWZXJzaW9uIl0sInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgtbWluaW1hbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgZG90LW5vdGF0aW9uOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dQYXR0ZXJuXCI6IFwiXldlYkNoYXQkXCIgfV0gKi9cbi8vIHdpbmRvd1snV2ViQ2hhdCddIGlzIHJlcXVpcmVkIGZvciBUeXBlU2NyaXB0XG5cbmltcG9ydCB7IENvbnN0YW50cywgY3JlYXRlU3RvcmUsIGNyZWF0ZVN0b3JlV2l0aERldlRvb2xzLCB2ZXJzaW9uIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29yZSc7XG5pbXBvcnQgeyBTdHJpY3RTdHlsZU9wdGlvbnMsIFN0eWxlT3B0aW9ucyB9IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWFwaSc7XG5cbmltcG9ydCBSZWFjdFdlYkNoYXQsIHtcbiAgQ29tcG9uZW50cyxcbiAgY29uY2F0TWlkZGxld2FyZSxcbiAgY29ubmVjdFRvV2ViQ2hhdCxcbiAgY3JlYXRlU3R5bGVTZXQsXG4gIGhvb2tzXG59IGZyb20gJ2JvdGZyYW1ld29yay13ZWJjaGF0LWNvbXBvbmVudCc7XG5cbmltcG9ydCBhZGRWZXJzaW9uIGZyb20gJy4vYWRkVmVyc2lvbic7XG5pbXBvcnQgY29yZVJlbmRlcldlYkNoYXQgZnJvbSAnLi9yZW5kZXJXZWJDaGF0JztcbmltcG9ydCBjcmVhdGVCcm93c2VyV2ViU3BlZWNoUG9ueWZpbGxGYWN0b3J5IGZyb20gJy4vY3JlYXRlQnJvd3NlcldlYlNwZWVjaFBvbnlmaWxsRmFjdG9yeSc7XG5pbXBvcnQgZGVmYXVsdENyZWF0ZURpcmVjdExpbmUgZnJvbSAnLi9jcmVhdGVEaXJlY3RMaW5lJztcbmltcG9ydCBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZUFwcFNlcnZpY2VFeHRlbnNpb24gZnJvbSAnLi9jcmVhdGVEaXJlY3RMaW5lQXBwU2VydmljZUV4dGVuc2lvbic7XG5cbmNvbnN0IHJlbmRlcldlYkNoYXQgPSBjb3JlUmVuZGVyV2ViQ2hhdC5iaW5kKG51bGwsIFJlYWN0V2ViQ2hhdCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXJlY3RMaW5lID0gb3B0aW9ucyA9PiB7XG4gIG9wdGlvbnMuYm90QWdlbnQgJiZcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnV2ViIENoYXQ6IERldmVsb3BlcnMgYXJlIG5vdCBjdXJyZW50bHkgYWxsb3dlZCB0byBzZXQgYm90QWdlbnQgaW4gdGhlIGNyZWF0ZURpcmVjdExpbmUgZnVuY3Rpb24uIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L0JvdEZyYW1ld29yay1XZWJDaGF0L2lzc3Vlcy8yMTE5IGZvciBtb3JlIGRldGFpbHMuJ1xuICAgICk7XG5cbiAgcmV0dXJuIGRlZmF1bHRDcmVhdGVEaXJlY3RMaW5lKHsgLi4ub3B0aW9ucywgYm90QWdlbnQ6IGBXZWJDaGF0LyR7dmVyc2lvbn0gKE1pbmltYWwpYCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXJlY3RMaW5lQXBwU2VydmljZUV4dGVuc2lvbiA9IG9wdGlvbnMgPT4ge1xuICBvcHRpb25zLmJvdEFnZW50ICYmXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dlYiBDaGF0OiBEZXZlbG9wZXJzIGFyZSBub3QgY3VycmVudGx5IGFsbG93ZWQgdG8gc2V0IGJvdEFnZW50IGluIHRoZSBjcmVhdGVEaXJlY3RMaW5lIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9Cb3RGcmFtZXdvcmstV2ViQ2hhdC9pc3N1ZXMvMjExOSBmb3IgbW9yZSBkZXRhaWxzLidcbiAgICApO1xuXG4gIHJldHVybiBkZWZhdWx0Q3JlYXRlRGlyZWN0TGluZUFwcFNlcnZpY2VFeHRlbnNpb24oeyAuLi5vcHRpb25zLCBib3RBZ2VudDogYFdlYkNoYXQvJHt2ZXJzaW9ufSAoTWluaW1hbClgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RXZWJDaGF0O1xuXG5leHBvcnQge1xuICBDb21wb25lbnRzLFxuICBjb25jYXRNaWRkbGV3YXJlLFxuICBjb25uZWN0VG9XZWJDaGF0LFxuICBDb25zdGFudHMsXG4gIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZVN0b3JlLFxuICBjcmVhdGVTdG9yZVdpdGhEZXZUb29scyxcbiAgY3JlYXRlU3R5bGVTZXQsXG4gIGhvb2tzLFxuICByZW5kZXJXZWJDaGF0LFxuICB2ZXJzaW9uXG59O1xuXG5leHBvcnQgdHlwZSB7IFN0eWxlT3B0aW9ucywgU3RyaWN0U3R5bGVPcHRpb25zIH07XG5cbi8vIFVudGlsIHdlIGhhdmUgYSBkZXZlbG9wbWVudC1zcGVjaWZpYyBidW5kbGUsIHdlIGFyZSBub3Qgc2hpcHBpbmcgY3JlYXRlU3RvcmVXaXRoRGV2VG9vbHMgaW4gYnVuZGxlLlxud2luZG93WydXZWJDaGF0J10gPSB7XG4gIC4uLndpbmRvd1snV2ViQ2hhdCddLFxuICBjb25jYXRNaWRkbGV3YXJlLFxuICBjb25uZWN0VG9XZWJDaGF0LFxuICBDb25zdGFudHMsXG4gIGNyZWF0ZUJyb3dzZXJXZWJTcGVlY2hQb255ZmlsbEZhY3RvcnksXG4gIGNyZWF0ZURpcmVjdExpbmUsXG4gIGNyZWF0ZURpcmVjdExpbmVBcHBTZXJ2aWNlRXh0ZW5zaW9uLFxuICBjcmVhdGVTdG9yZSxcbiAgY3JlYXRlU3R5bGVTZXQsXG4gIGhvb2tzLFxuICBSZWFjdFdlYkNoYXQsXG4gIHJlbmRlcldlYkNoYXRcbn07XG5cbmFkZFZlcnNpb24oJ21pbmltYWwnKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBR0E7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHNCQUFBLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QkMscUNBQTdCLENBQXRCOzs7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxPQUFPLEVBQUk7RUFDekNBLE9BQU8sQ0FBQ0MsUUFBUixJQUNFQyxPQUFPLENBQUNDLElBQVIsQ0FDRSxzTEFERixDQURGO0VBS0EsT0FBTyxJQUFBQyx5QkFBQSxrQ0FBNkJKLE9BQTdCO0lBQXNDQyxRQUFRLG9CQUFhSSxnQ0FBYjtFQUE5QyxHQUFQO0FBQ0QsQ0FQTTs7OztBQVNBLElBQU1DLG1DQUFtQyxHQUFHLFNBQXRDQSxtQ0FBc0MsQ0FBQU4sT0FBTyxFQUFJO0VBQzVEQSxPQUFPLENBQUNDLFFBQVIsSUFDRUMsT0FBTyxDQUFDQyxJQUFSLENBQ0Usc0xBREYsQ0FERjtFQUtBLE9BQU8sSUFBQUksNENBQUEsa0NBQWdEUCxPQUFoRDtJQUF5REMsUUFBUSxvQkFBYUksZ0NBQWI7RUFBakUsR0FBUDtBQUNELENBUE07OztlQVNRUCxxQzs7QUFrQmY7QUFDQVUsTUFBTSxDQUFDLFNBQUQsQ0FBTixtQ0FDS0EsTUFBTSxDQUFDLFNBQUQsQ0FEWDtFQUVFQyxnQkFBZ0IsRUFBaEJBLDhDQUZGO0VBR0VDLGdCQUFnQixFQUFoQkEsOENBSEY7RUFJRUMsU0FBUyxFQUFUQSxrQ0FKRjtFQUtFQyxxQ0FBcUMsRUFBckNBLDhDQUxGO0VBTUViLGdCQUFnQixFQUFoQkEsZ0JBTkY7RUFPRU8sbUNBQW1DLEVBQW5DQSxtQ0FQRjtFQVFFTyxXQUFXLEVBQVhBLG9DQVJGO0VBU0VDLGNBQWMsRUFBZEEsNENBVEY7RUFVRUMsS0FBSyxFQUFMQSxtQ0FWRjtFQVdFakIsWUFBWSxFQUFaQSxxQ0FYRjtFQVlFSCxhQUFhLEVBQWJBO0FBWkY7QUFlQSxJQUFBcUIsbUJBQUEsRUFBVyxTQUFYIn0=