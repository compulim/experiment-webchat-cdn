"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _botframeworkWebchatComponent = require("botframework-webchat-component");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _useAdaptiveCardsPackage = _interopRequireDefault(require("../hooks/useAdaptiveCardsPackage"));

var _useParseAdaptiveCardJSON = _interopRequireDefault(require("../hooks/internal/useParseAdaptiveCardJSON"));

var _useUniqueId = _interopRequireDefault(require("../hooks/internal/useUniqueId"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/no-array-index-key */

/* eslint-disable react/forbid-dom-props */
var useLocalizer = _botframeworkWebchatComponent.hooks.useLocalizer; // Perform a depth-first search of the Adaptive Card tree.

function walkAllItems(node, fn) {
  fn(node);

  if (node.getItemAt && node.getItemCount) {
    for (var count = node.getItemCount(), index = 0; index < count; index++) {
      walkAllItems(node.getItemAt(index), fn);
    }
  }

  if (node.getActionAt && node.getActionCount) {
    for (var _count = node.getActionCount(), _index = 0; _index < _count; _index++) {
      fn(node.getActionAt(_index));
    }
  }
}

var AdaptiveCardChoiceSetInput = function AdaptiveCardChoiceSetInput(_ref) {
  var _ref$input = _ref.input,
      choices = _ref$input.choices,
      defaultValue = _ref$input.defaultValue;
  var labelId = (0, _useUniqueId.default)('webchat__id');
  var defaultChoice = choices.find(function (_ref2) {
    var value = _ref2.value;
    return defaultValue === value || !defaultValue && !value;
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("select", {
    "aria-labelledby": defaultChoice ? labelId : undefined,
    defaultValue: defaultValue,
    tabIndex: -1
  }, choices.map(function (choice) {
    return /*#__PURE__*/_react.default.createElement("option", {
      id: choice === defaultChoice ? labelId : undefined,
      key: choice.value,
      value: choice.value
    }, choice.title);
  })));
};

AdaptiveCardChoiceSetInput.propTypes = {
  input: _propTypes.default.shape({
    choices: _propTypes.default.arrayOf(_propTypes.default.shape({
      title: _propTypes.default.string,
      value: _propTypes.default.any
    })),
    defaultValue: _propTypes.default.any,
    value: _propTypes.default.any
  }).isRequired
};

var AdaptiveCardAttachment = function AdaptiveCardAttachment(_ref3) {
  var content = _ref3.content;
  var localize = useLocalizer();
  var parseAdaptiveCardJSON = (0, _useParseAdaptiveCardJSON.default)();

  var _useAdaptiveCardsPack = (0, _useAdaptiveCardsPackage.default)(),
      _useAdaptiveCardsPack2 = (0, _slicedToArray2.default)(_useAdaptiveCardsPack, 1),
      _useAdaptiveCardsPack3 = _useAdaptiveCardsPack2[0],
      ChoiceSetInput = _useAdaptiveCardsPack3.ChoiceSetInput,
      DateInput = _useAdaptiveCardsPack3.DateInput,
      NumberInput = _useAdaptiveCardsPack3.NumberInput,
      OpenUrlAction = _useAdaptiveCardsPack3.OpenUrlAction,
      ShowCardAction = _useAdaptiveCardsPack3.ShowCardAction,
      SubmitAction = _useAdaptiveCardsPack3.SubmitAction,
      TextInput = _useAdaptiveCardsPack3.TextInput,
      TimeInput = _useAdaptiveCardsPack3.TimeInput,
      ToggleInput = _useAdaptiveCardsPack3.ToggleInput;

  var card = (0, _react.useMemo)(function () {
    return parseAdaptiveCardJSON(content, {
      ignoreErrors: true
    });
  }, [content, parseAdaptiveCardJSON]);
  var inputs = (0, _react.useMemo)(function () {
    var inputs = [];
    walkAllItems(card, function (node) {
      if (node instanceof ChoiceSetInput || node instanceof DateInput || node instanceof NumberInput || node instanceof OpenUrlAction || node instanceof ShowCardAction || node instanceof SubmitAction || node instanceof TextInput || node instanceof TimeInput || node instanceof ToggleInput) {
        inputs.push(node);
      }
    });
    return inputs;
  }, [card, ChoiceSetInput, DateInput, NumberInput, OpenUrlAction, ShowCardAction, SubmitAction, TextInput, TimeInput, ToggleInput]);
  var cardLabel = localize('ATTACHMENT_CARD', card.speak || '', '', '');
  return /*#__PURE__*/_react.default.createElement("article", null, /*#__PURE__*/_react.default.createElement("div", null, cardLabel), inputs.map(function (input, index) {
    return input instanceof ChoiceSetInput ? /*#__PURE__*/_react.default.createElement(AdaptiveCardChoiceSetInput, {
      input: input,
      key: index
    }) : input instanceof DateInput ? /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("input", {
      placeholder: input.placeholder,
      tabIndex: -1,
      type: "date"
    })) : input instanceof NumberInput ? /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("input", {
      placeholder: input.placeholder,
      tabIndex: -1,
      type: "number"
    })) : input instanceof OpenUrlAction || input instanceof ShowCardAction || input instanceof SubmitAction ? /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("button", {
      tabIndex: -1,
      type: "button"
    }, input.title)) : input instanceof TextInput ? /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("input", {
      placeholder: input.placeholder,
      tabIndex: -1,
      type: "text"
    })) : input instanceof TimeInput ? /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("input", {
      placeholder: input.placeholder,
      tabIndex: -1,
      type: "time"
    })) : input instanceof ToggleInput ? /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, input.title, /*#__PURE__*/_react.default.createElement("input", {
      defaultChecked: input.value === input.valueOn,
      tabIndex: -1,
      type: "checkbox"
    })) : false;
  }));
};

AdaptiveCardAttachment.propTypes = {
  content: _propTypes.default.any.isRequired
};
var _default = AdaptiveCardAttachment;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1c2VMb2NhbGl6ZXIiLCJob29rcyIsIndhbGtBbGxJdGVtcyIsIm5vZGUiLCJmbiIsImdldEl0ZW1BdCIsImdldEl0ZW1Db3VudCIsImNvdW50IiwiaW5kZXgiLCJnZXRBY3Rpb25BdCIsImdldEFjdGlvbkNvdW50IiwiQWRhcHRpdmVDYXJkQ2hvaWNlU2V0SW5wdXQiLCJpbnB1dCIsImNob2ljZXMiLCJkZWZhdWx0VmFsdWUiLCJsYWJlbElkIiwidXNlVW5pcXVlSWQiLCJkZWZhdWx0Q2hvaWNlIiwiZmluZCIsInZhbHVlIiwidW5kZWZpbmVkIiwibWFwIiwiY2hvaWNlIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImFycmF5T2YiLCJzdHJpbmciLCJhbnkiLCJpc1JlcXVpcmVkIiwiQWRhcHRpdmVDYXJkQXR0YWNobWVudCIsImNvbnRlbnQiLCJsb2NhbGl6ZSIsInBhcnNlQWRhcHRpdmVDYXJkSlNPTiIsInVzZVBhcnNlQWRhcHRpdmVDYXJkSlNPTiIsInVzZUFkYXB0aXZlQ2FyZHNQYWNrYWdlIiwiQ2hvaWNlU2V0SW5wdXQiLCJEYXRlSW5wdXQiLCJOdW1iZXJJbnB1dCIsIk9wZW5VcmxBY3Rpb24iLCJTaG93Q2FyZEFjdGlvbiIsIlN1Ym1pdEFjdGlvbiIsIlRleHRJbnB1dCIsIlRpbWVJbnB1dCIsIlRvZ2dsZUlucHV0IiwiY2FyZCIsInVzZU1lbW8iLCJpZ25vcmVFcnJvcnMiLCJpbnB1dHMiLCJwdXNoIiwiY2FyZExhYmVsIiwic3BlYWsiLCJwbGFjZWhvbGRlciIsInZhbHVlT24iXSwic291cmNlUm9vdCI6ImJ1bmRsZTovLy8iLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGl2ZUNhcmRzL0F0dGFjaG1lbnRGb3JTY3JlZW5SZWFkZXIvQWRhcHRpdmVDYXJkQXR0YWNobWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1kb20tcHJvcHMgKi9cbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLXdlYmNoYXQtY29tcG9uZW50JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZUFkYXB0aXZlQ2FyZHNQYWNrYWdlIGZyb20gJy4uL2hvb2tzL3VzZUFkYXB0aXZlQ2FyZHNQYWNrYWdlJztcbmltcG9ydCB1c2VQYXJzZUFkYXB0aXZlQ2FyZEpTT04gZnJvbSAnLi4vaG9va3MvaW50ZXJuYWwvdXNlUGFyc2VBZGFwdGl2ZUNhcmRKU09OJztcbmltcG9ydCB1c2VVbmlxdWVJZCBmcm9tICcuLi9ob29rcy9pbnRlcm5hbC91c2VVbmlxdWVJZCc7XG5cbmNvbnN0IHsgdXNlTG9jYWxpemVyIH0gPSBob29rcztcblxuLy8gUGVyZm9ybSBhIGRlcHRoLWZpcnN0IHNlYXJjaCBvZiB0aGUgQWRhcHRpdmUgQ2FyZCB0cmVlLlxuZnVuY3Rpb24gd2Fsa0FsbEl0ZW1zKG5vZGUsIGZuKSB7XG4gIGZuKG5vZGUpO1xuXG4gIGlmIChub2RlLmdldEl0ZW1BdCAmJiBub2RlLmdldEl0ZW1Db3VudCkge1xuICAgIGZvciAobGV0IGNvdW50ID0gbm9kZS5nZXRJdGVtQ291bnQoKSwgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICB3YWxrQWxsSXRlbXMobm9kZS5nZXRJdGVtQXQoaW5kZXgpLCBmbik7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUuZ2V0QWN0aW9uQXQgJiYgbm9kZS5nZXRBY3Rpb25Db3VudCkge1xuICAgIGZvciAobGV0IGNvdW50ID0gbm9kZS5nZXRBY3Rpb25Db3VudCgpLCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGZuKG5vZGUuZ2V0QWN0aW9uQXQoaW5kZXgpKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgQWRhcHRpdmVDYXJkQ2hvaWNlU2V0SW5wdXQgPSAoeyBpbnB1dDogeyBjaG9pY2VzLCBkZWZhdWx0VmFsdWUgfSB9KSA9PiB7XG4gIGNvbnN0IGxhYmVsSWQgPSB1c2VVbmlxdWVJZCgnd2ViY2hhdF9faWQnKTtcbiAgY29uc3QgZGVmYXVsdENob2ljZSA9IGNob2ljZXMuZmluZCgoeyB2YWx1ZSB9KSA9PiBkZWZhdWx0VmFsdWUgPT09IHZhbHVlIHx8ICghZGVmYXVsdFZhbHVlICYmICF2YWx1ZSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWxlY3QgYXJpYS1sYWJlbGxlZGJ5PXtkZWZhdWx0Q2hvaWNlID8gbGFiZWxJZCA6IHVuZGVmaW5lZH0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9IHRhYkluZGV4PXstMX0+XG4gICAgICAgIHtjaG9pY2VzLm1hcChjaG9pY2UgPT4gKFxuICAgICAgICAgIDxvcHRpb24gaWQ9e2Nob2ljZSA9PT0gZGVmYXVsdENob2ljZSA/IGxhYmVsSWQgOiB1bmRlZmluZWR9IGtleT17Y2hvaWNlLnZhbHVlfSB2YWx1ZT17Y2hvaWNlLnZhbHVlfT5cbiAgICAgICAgICAgIHtjaG9pY2UudGl0bGV9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BZGFwdGl2ZUNhcmRDaG9pY2VTZXRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNob2ljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55XG4gICAgICB9KVxuICAgICksXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55XG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IEFkYXB0aXZlQ2FyZEF0dGFjaG1lbnQgPSAoeyBjb250ZW50IH0pID0+IHtcbiAgY29uc3QgbG9jYWxpemUgPSB1c2VMb2NhbGl6ZXIoKTtcbiAgY29uc3QgcGFyc2VBZGFwdGl2ZUNhcmRKU09OID0gdXNlUGFyc2VBZGFwdGl2ZUNhcmRKU09OKCk7XG4gIGNvbnN0IFtcbiAgICB7XG4gICAgICBDaG9pY2VTZXRJbnB1dCxcbiAgICAgIERhdGVJbnB1dCxcbiAgICAgIE51bWJlcklucHV0LFxuICAgICAgT3BlblVybEFjdGlvbixcbiAgICAgIFNob3dDYXJkQWN0aW9uLFxuICAgICAgU3VibWl0QWN0aW9uLFxuICAgICAgVGV4dElucHV0LFxuICAgICAgVGltZUlucHV0LFxuICAgICAgVG9nZ2xlSW5wdXRcbiAgICB9XG4gIF0gPSB1c2VBZGFwdGl2ZUNhcmRzUGFja2FnZSgpO1xuXG4gIGNvbnN0IGNhcmQgPSB1c2VNZW1vKCgpID0+IHBhcnNlQWRhcHRpdmVDYXJkSlNPTihjb250ZW50LCB7IGlnbm9yZUVycm9yczogdHJ1ZSB9KSwgW2NvbnRlbnQsIHBhcnNlQWRhcHRpdmVDYXJkSlNPTl0pO1xuICBjb25zdCBpbnB1dHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBpbnB1dHMgPSBbXTtcblxuICAgIHdhbGtBbGxJdGVtcyhjYXJkLCBub2RlID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgbm9kZSBpbnN0YW5jZW9mIENob2ljZVNldElucHV0IHx8XG4gICAgICAgIG5vZGUgaW5zdGFuY2VvZiBEYXRlSW5wdXQgfHxcbiAgICAgICAgbm9kZSBpbnN0YW5jZW9mIE51bWJlcklucHV0IHx8XG4gICAgICAgIG5vZGUgaW5zdGFuY2VvZiBPcGVuVXJsQWN0aW9uIHx8XG4gICAgICAgIG5vZGUgaW5zdGFuY2VvZiBTaG93Q2FyZEFjdGlvbiB8fFxuICAgICAgICBub2RlIGluc3RhbmNlb2YgU3VibWl0QWN0aW9uIHx8XG4gICAgICAgIG5vZGUgaW5zdGFuY2VvZiBUZXh0SW5wdXQgfHxcbiAgICAgICAgbm9kZSBpbnN0YW5jZW9mIFRpbWVJbnB1dCB8fFxuICAgICAgICBub2RlIGluc3RhbmNlb2YgVG9nZ2xlSW5wdXRcbiAgICAgICkge1xuICAgICAgICBpbnB1dHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBpbnB1dHM7XG4gIH0sIFtcbiAgICBjYXJkLFxuICAgIENob2ljZVNldElucHV0LFxuICAgIERhdGVJbnB1dCxcbiAgICBOdW1iZXJJbnB1dCxcbiAgICBPcGVuVXJsQWN0aW9uLFxuICAgIFNob3dDYXJkQWN0aW9uLFxuICAgIFN1Ym1pdEFjdGlvbixcbiAgICBUZXh0SW5wdXQsXG4gICAgVGltZUlucHV0LFxuICAgIFRvZ2dsZUlucHV0XG4gIF0pO1xuXG4gIGNvbnN0IGNhcmRMYWJlbCA9IGxvY2FsaXplKCdBVFRBQ0hNRU5UX0NBUkQnLCBjYXJkLnNwZWFrIHx8ICcnLCAnJywgJycpO1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8ZGl2PntjYXJkTGFiZWx9PC9kaXY+XG4gICAgICB7aW5wdXRzLm1hcCgoaW5wdXQsIGluZGV4KSA9PlxuICAgICAgICBpbnB1dCBpbnN0YW5jZW9mIENob2ljZVNldElucHV0ID8gKFxuICAgICAgICAgIDxBZGFwdGl2ZUNhcmRDaG9pY2VTZXRJbnB1dCBpbnB1dD17aW5wdXR9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICkgOiBpbnB1dCBpbnN0YW5jZW9mIERhdGVJbnB1dCA/IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPXtpbnB1dC5wbGFjZWhvbGRlcn0gdGFiSW5kZXg9ey0xfSB0eXBlPVwiZGF0ZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBpbnB1dCBpbnN0YW5jZW9mIE51bWJlcklucHV0ID8gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9e2lucHV0LnBsYWNlaG9sZGVyfSB0YWJJbmRleD17LTF9IHR5cGU9XCJudW1iZXJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaW5wdXQgaW5zdGFuY2VvZiBPcGVuVXJsQWN0aW9uIHx8IGlucHV0IGluc3RhbmNlb2YgU2hvd0NhcmRBY3Rpb24gfHwgaW5wdXQgaW5zdGFuY2VvZiBTdWJtaXRBY3Rpb24gPyAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxidXR0b24gdGFiSW5kZXg9ey0xfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgIHtpbnB1dC50aXRsZX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaW5wdXQgaW5zdGFuY2VvZiBUZXh0SW5wdXQgPyAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj17aW5wdXQucGxhY2Vob2xkZXJ9IHRhYkluZGV4PXstMX0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaW5wdXQgaW5zdGFuY2VvZiBUaW1lSW5wdXQgPyAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj17aW5wdXQucGxhY2Vob2xkZXJ9IHRhYkluZGV4PXstMX0gdHlwZT1cInRpbWVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaW5wdXQgaW5zdGFuY2VvZiBUb2dnbGVJbnB1dCA/IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2lucHV0LnRpdGxlfVxuICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRDaGVja2VkPXtpbnB1dC52YWx1ZSA9PT0gaW5wdXQudmFsdWVPbn0gdGFiSW5kZXg9ey0xfSB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuQWRhcHRpdmVDYXJkQXR0YWNobWVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRhcHRpdmVDYXJkQXR0YWNobWVudDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7QUFSQTs7QUFDQTtBQVNBLElBQVFBLFlBQVIsR0FBeUJDLG1DQUF6QixDQUFRRCxZQUFSLEMsQ0FFQTs7QUFDQSxTQUFTRSxZQUFULENBQXNCQyxJQUF0QixFQUE0QkMsRUFBNUIsRUFBZ0M7RUFDOUJBLEVBQUUsQ0FBQ0QsSUFBRCxDQUFGOztFQUVBLElBQUlBLElBQUksQ0FBQ0UsU0FBTCxJQUFrQkYsSUFBSSxDQUFDRyxZQUEzQixFQUF5QztJQUN2QyxLQUFLLElBQUlDLEtBQUssR0FBR0osSUFBSSxDQUFDRyxZQUFMLEVBQVosRUFBaUNFLEtBQUssR0FBRyxDQUE5QyxFQUFpREEsS0FBSyxHQUFHRCxLQUF6RCxFQUFnRUMsS0FBSyxFQUFyRSxFQUF5RTtNQUN2RU4sWUFBWSxDQUFDQyxJQUFJLENBQUNFLFNBQUwsQ0FBZUcsS0FBZixDQUFELEVBQXdCSixFQUF4QixDQUFaO0lBQ0Q7RUFDRjs7RUFFRCxJQUFJRCxJQUFJLENBQUNNLFdBQUwsSUFBb0JOLElBQUksQ0FBQ08sY0FBN0IsRUFBNkM7SUFDM0MsS0FBSyxJQUFJSCxNQUFLLEdBQUdKLElBQUksQ0FBQ08sY0FBTCxFQUFaLEVBQW1DRixNQUFLLEdBQUcsQ0FBaEQsRUFBbURBLE1BQUssR0FBR0QsTUFBM0QsRUFBa0VDLE1BQUssRUFBdkUsRUFBMkU7TUFDekVKLEVB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