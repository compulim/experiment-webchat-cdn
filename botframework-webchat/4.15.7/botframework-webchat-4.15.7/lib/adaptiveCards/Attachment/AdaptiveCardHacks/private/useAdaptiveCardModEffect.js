"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAdaptiveCardModEffect;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet5 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _react = require("react");

var _useLazyRef = _interopRequireDefault(require("./useLazyRef"));

var _useValueRef = _interopRequireDefault(require("./useValueRef"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _mod = /*#__PURE__*/new WeakMap();

var _undo = /*#__PURE__*/new WeakMap();

var Mod = /*#__PURE__*/function () {
  function Mod(mod) {
    (0, _classCallCheck2.default)(this, Mod);

    _classPrivateFieldInitSpec(this, _mod, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _undo, {
      writable: true,
      value: void 0
    });

    (0, _classPrivateFieldSet2.default)(this, _mod, mod);
  } // @ts-ignore We are using Babel to transpile and it will transpile private modifier.


  (0, _createClass2.default)(Mod, [{
    key: "apply",
    value: function apply(adaptiveCard, cardElement) {
      var _classPrivateFieldGet2, _classPrivateFieldGet3;

      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet5.default)(this, _undo)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.call(this);

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      (0, _classPrivateFieldSet2.default)(this, _undo, adaptiveCard && cardElement && (_classPrivateFieldGet3 = (0, _classPrivateFieldGet5.default)(this, _mod)).call.apply(_classPrivateFieldGet3, [this, adaptiveCard, cardElement].concat(args)));
    }
  }, {
    key: "undo",
    value: function undo() {
      var _classPrivateFieldGet4;

      (_classPrivateFieldGet4 = (0, _classPrivateFieldGet5.default)(this, _undo)) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.call(this);
      (0, _classPrivateFieldSet2.default)(this, _undo, undefined);
    }
  }]);
  return Mod;
}();
/**
 * Creates a mod effect for Adaptive Card.
 *
 * When this hook is executed, it will return two functions for applying and undo the mod.
 * It will also monitor the DOM tree and undo-then-reapply if mutation occurred.
 *
 * The first function must be called right after DOM is mounted. The second function must be called right before re-render.
 *
 * @return {[function, function]} Two functions, the first one to apply the mod, the second one to undo the mod.
 */


function useAdaptiveCardModEffect(modder, adaptiveCard) {
  var adaptiveCardRef = (0, _useValueRef.default)(adaptiveCard);
  var mod = (0, _react.useMemo)(function () {
    return new Mod(modder);
  }, [modder]);
  var reapplyRef = (0, _react.useRef)();
  var observerRef = (0, _useLazyRef.default)(function () {
    return new MutationObserver(function () {
      var _reapplyRef$current;

      (_reapplyRef$current = reapplyRef.current) === null || _reapplyRef$current === void 0 ? void 0 : _reapplyRef$current.call(reapplyRef);
    });
  });
  (0, _react.useEffect)(function () {
    return function () {
      observerRef.current.disconnect();
    };
  }, [observerRef]);
  var handleApply = (0, _react.useCallback)(function (cardElement) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (adaptiveCardRef.current && cardElement) {
      // Apply the mod immediately, then assign the function to reapply() so we can call later when mutation happens.
      (reapplyRef.current = function () {
        return mod.apply.apply(mod, [adaptiveCardRef.current, cardElement].concat(args));
      })();
    }

    var observer = observerRef.current;
    observer.disconnect();
    observer.observe(cardElement, {
      childList: true,
      subtree: true
    });
  }, [adaptiveCardRef, observerRef, mod]);
  var handleUndo = (0, _react.useCallback)(function () {
    mod.undo(); // If we have undo-ed the mod, calling reapply() through MutationObserver should be no-op.

    reapplyRef.current = undefined;
  }, [mod, reapplyRef]);
  return (0, _react.useMemo)(function () {
    return Object.freeze([handleApply, handleUndo]);
  }, [handleApply, handleUndo]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNb2QiLCJtb2QiLCJhZGFwdGl2ZUNhcmQiLCJjYXJkRWxlbWVudCIsImFyZ3MiLCJ1bmRlZmluZWQiLCJ1c2VBZGFwdGl2ZUNhcmRNb2RFZmZlY3QiLCJtb2RkZXIiLCJhZGFwdGl2ZUNhcmRSZWYiLCJ1c2VWYWx1ZVJlZiIsInVzZU1lbW8iLCJyZWFwcGx5UmVmIiwidXNlUmVmIiwib2JzZXJ2ZXJSZWYiLCJ1c2VMYXp5UmVmIiwiTXV0YXRpb25PYnNlcnZlciIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJkaXNjb25uZWN0IiwiaGFuZGxlQXBwbHkiLCJ1c2VDYWxsYmFjayIsImFwcGx5Iiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImhhbmRsZVVuZG8iLCJ1bmRvIiwiT2JqZWN0IiwiZnJlZXplIl0sInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYWRhcHRpdmVDYXJkcy9BdHRhY2htZW50L0FkYXB0aXZlQ2FyZEhhY2tzL3ByaXZhdGUvdXNlQWRhcHRpdmVDYXJkTW9kRWZmZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZUxhenlSZWYgZnJvbSAnLi91c2VMYXp5UmVmJztcbmltcG9ydCB1c2VWYWx1ZVJlZiBmcm9tICcuL3VzZVZhbHVlUmVmJztcblxuaW1wb3J0IHR5cGUgeyBBZGFwdGl2ZUNhcmQgfSBmcm9tICdhZGFwdGl2ZWNhcmRzJztcblxudHlwZSBNb2RGdW5jdGlvbjxUQXJncyBleHRlbmRzIHVua25vd25bXSA9IFtdPiA9IChcbiAgYWRhcHRpdmVDYXJkOiBBZGFwdGl2ZUNhcmQsXG4gIGNhcmRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgLi4uYXJnczogVEFyZ3NcbikgPT4gKCkgPT4gdm9pZDtcblxuY2xhc3MgTW9kPFRBcmdzIGV4dGVuZHMgdW5rbm93bltdPiB7XG4gIGNvbnN0cnVjdG9yKG1vZDogTW9kRnVuY3Rpb248VEFyZ3M+KSB7XG4gICAgdGhpcy4jbW9kID0gbW9kO1xuICB9XG5cbiAgLy8gQHRzLWlnbm9yZSBXZSBhcmUgdXNpbmcgQmFiZWwgdG8gdHJhbnNwaWxlIGFuZCBpdCB3aWxsIHRyYW5zcGlsZSBwcml2YXRlIG1vZGlmaWVyLlxuICAjbW9kOiBNb2RGdW5jdGlvbjxUQXJncz47XG4gIC8vIEB0cy1pZ25vcmUgV2UgYXJlIHVzaW5nIEJhYmVsIHRvIHRyYW5zcGlsZSBhbmQgaXQgd2lsbCB0cmFuc3BpbGUgcHJpdmF0ZSBtb2RpZmllci5cbiAgI3VuZG86ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcblxuICBhcHBseShhZGFwdGl2ZUNhcmQ6IEFkYXB0aXZlQ2FyZCB8IHVuZGVmaW5lZCwgY2FyZEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkLCAuLi5hcmdzOiBUQXJncykge1xuICAgIHRoaXMuI3VuZG8/LigpO1xuICAgIHRoaXMuI3VuZG8gPSBhZGFwdGl2ZUNhcmQgJiYgY2FyZEVsZW1lbnQgJiYgdGhpcy4jbW9kKGFkYXB0aXZlQ2FyZCwgY2FyZEVsZW1lbnQsIC4uLmFyZ3MpO1xuICB9XG5cbiAgdW5kbygpIHtcbiAgICB0aGlzLiN1bmRvPy4oKTtcbiAgICB0aGlzLiN1bmRvID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1vZCBlZmZlY3QgZm9yIEFkYXB0aXZlIENhcmQuXG4gKlxuICogV2hlbiB0aGlzIGhvb2sgaXMgZXhlY3V0ZWQsIGl0IHdpbGwgcmV0dXJuIHR3byBmdW5jdGlvbnMgZm9yIGFwcGx5aW5nIGFuZCB1bmRvIHRoZSBtb2QuXG4gKiBJdCB3aWxsIGFsc28gbW9uaXRvciB0aGUgRE9NIHRyZWUgYW5kIHVuZG8tdGhlbi1yZWFwcGx5IGlmIG11dGF0aW9uIG9jY3VycmVkLlxuICpcbiAqIFRoZSBmaXJzdCBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCByaWdodCBhZnRlciBET00gaXMgbW91bnRlZC4gVGhlIHNlY29uZCBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCByaWdodCBiZWZvcmUgcmUtcmVuZGVyLlxuICpcbiAqIEByZXR1cm4ge1tmdW5jdGlvbiwgZnVuY3Rpb25dfSBUd28gZnVuY3Rpb25zLCB0aGUgZmlyc3Qgb25lIHRvIGFwcGx5IHRoZSBtb2QsIHRoZSBzZWNvbmQgb25lIHRvIHVuZG8gdGhlIG1vZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQWRhcHRpdmVDYXJkTW9kRWZmZWN0PFRBcmdzIGV4dGVuZHMgdW5rbm93bltdPihcbiAgbW9kZGVyOiAoYWRhcHRpdmVDYXJkOiBBZGFwdGl2ZUNhcmQsIGNhcmRFbGVtZW50OiBIVE1MRWxlbWVudCwgLi4uYXJnczogVEFyZ3MpID0+ICgpID0+IHZvaWQsXG4gIGFkYXB0aXZlQ2FyZDogQWRhcHRpdmVDYXJkXG4pOiByZWFkb25seSBbKGNhcmRFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gdm9pZCwgKCkgPT4gdm9pZF0ge1xuICBjb25zdCBhZGFwdGl2ZUNhcmRSZWYgPSB1c2VWYWx1ZVJlZihhZGFwdGl2ZUNhcmQpO1xuICBjb25zdCBtb2QgPSB1c2VNZW1vKCgpID0+IG5ldyBNb2Q8VEFyZ3M+KG1vZGRlciksIFttb2RkZXJdKTtcbiAgY29uc3QgcmVhcHBseVJlZiA9IHVzZVJlZjwoKSA9PiB2b2lkPigpO1xuXG4gIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlTGF6eVJlZjxNdXRhdGlvbk9ic2VydmVyPihcbiAgICAoKSA9PlxuICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICByZWFwcGx5UmVmLmN1cnJlbnQ/LigpO1xuICAgICAgfSlcbiAgKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXJSZWYuY3VycmVudC5kaXNjb25uZWN0KCk7XG4gICAgfSxcbiAgICBbb2JzZXJ2ZXJSZWZdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSB1c2VDYWxsYmFjayhcbiAgICAoY2FyZEVsZW1lbnQ6IEhUTUxFbGVtZW50LCAuLi5hcmdzOiBUQXJncykgPT4ge1xuICAgICAgaWYgKGFkYXB0aXZlQ2FyZFJlZi5jdXJyZW50ICYmIGNhcmRFbGVtZW50KSB7XG4gICAgICAgIC8vIEFwcGx5IHRoZSBtb2QgaW1tZWRpYXRlbHksIHRoZW4gYXNzaWduIHRoZSBmdW5jdGlvbiB0byByZWFwcGx5KCkgc28gd2UgY2FuIGNhbGwgbGF0ZXIgd2hlbiBtdXRhdGlvbiBoYXBwZW5zLlxuICAgICAgICAocmVhcHBseVJlZi5jdXJyZW50ID0gKCkgPT4gbW9kLmFwcGx5KGFkYXB0aXZlQ2FyZFJlZi5jdXJyZW50LCBjYXJkRWxlbWVudCwgLi4uYXJncykpKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgY3VycmVudDogb2JzZXJ2ZXIgfSA9IG9ic2VydmVyUmVmO1xuXG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGNhcmRFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB9LFxuICAgIFthZGFwdGl2ZUNhcmRSZWYsIG9ic2VydmVyUmVmLCBtb2RdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlVW5kbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBtb2QudW5kbygpO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSB1bmRvLWVkIHRoZSBtb2QsIGNhbGxpbmcgcmVhcHBseSgpIHRocm91Z2ggTXV0YXRpb25PYnNlcnZlciBzaG91bGQgYmUgbm8tb3AuXG4gICAgcmVhcHBseVJlZi5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICB9LCBbbW9kLCByZWFwcGx5UmVmXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT4gT2JqZWN0LmZyZWV6ZShbaGFuZGxlQXBwbHksIGhhbmRsZVVuZG9dKSBhcyByZWFkb25seSBbKGNhcmRFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gdm9pZCwgKCkgPT4gdm9pZF0sXG4gICAgW2hhbmRsZUFwcGx5LCBoYW5kbGVVbmRvXVxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBVU1BLEc7RUFDSixhQUFZQyxHQUFaLEVBQXFDO0lBQUE7O0lBQUE7TUFBQTtNQUFBO0lBQUE7O0lBQUE7TUFBQTtNQUFBO0lBQUE7O0lBQ25DLGdEQUFZQSxHQUFaO0VBQ0QsQyxDQUVEOzs7OztXQUtBLGVBQU1DLFlBQU4sRUFBOENDLFdBQTlDLEVBQW9HO01BQUE7O01BQ2xHOztNQURrRyxrQ0FBYkMsSUFBYTtRQUFiQSxJQUFhO01BQUE7O01BRWxHLGlEQUFhRixZQUFZLElBQUlDLFdBQWhCLGtFQUErQixJQUEvQiw2Q0FBK0IsSUFBL0IsRUFBeUNELFlBQXpDLEVBQXVEQyxXQUF2RCxTQUF1RUMsSUFBdkUsRUFBYjtJQUNEOzs7V0FFRCxnQkFBTztNQUFBOztNQUNMO01BQ0EsaURBQWFDLFNBQWI7SUFDRDs7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDZSxTQUFTQyx3QkFBVCxDQUNiQyxNQURhLEVBRWJMLFlBRmEsRUFHOEM7RUFDM0QsSUFBTU0sZUFBZSxHQUFHLElBQUFDLG9CQUFBLEVBQVlQLFlBQVosQ0FBeEI7RUFDQSxJQUFNRCxHQUFHLEdBQUcsSUFBQVMsY0FBQSxFQUFRO0lBQUEsT0FBTSxJQUFJVixHQUFKLENBQWVPLE1BQWYsQ0FBTjtFQUFBLENBQVIsRUFBc0MsQ0FBQ0EsTUFBRCxDQUF0QyxDQUFaO0VBQ0EsSUFBTUksVUFBVSxHQUFHLElBQUFDLGFBQUEsR0FBbkI7RUFFQSxJQUFNQyxXQUFXLEdBQUcsSUFBQUMsbUJBQUEsRUFDbEI7SUFBQSxPQUNFLElBQUlDLGdCQUFKLENBQXFCLFlBQU07TUFBQTs7TUFDekIsdUJBQUFKLFVBQVUsQ0FBQ0ssT0FBWCxpRkFBQUwsVUFBVTtJQUNYLENBRkQsQ0FERjtFQUFBLENBRGtCLENBQXBCO0VBT0EsSUFBQU0sZ0JBQUEsRUFDRTtJQUFBLE9BQU0sWUFBTTtNQUNWSixXQUFXLENBQUNHLE9BQVosQ0FBb0JFLFVBQXBCO0lBQ0QsQ0FGRDtFQUFBLENBREYsRUFJRSxDQUFDTCxXQUFELENBSkY7RUFPQSxJQUFNTSxXQUFXLEdBQUcsSUFBQUMsa0JBQUEsRUFDbEIsVUFBQ2pCLFdBQUQsRUFBOEM7SUFBQSxtQ0FBaEJDLElBQWdCO01BQWhCQSxJQUFnQjtJQUFBOztJQUM1QyxJQUFJSSxlQUFlLENBQUNRLE9BQWhCLElBQTJCYixXQUEvQixFQUE0QztNQUMxQztNQUNBLENBQUNRLFVBQVUsQ0FBQ0ssT0FBWCxHQUFxQjtRQUFBLE9BQU1mLEdBQUcsQ0FBQ29CLEtBQUosT0FBQXBCLEdBQUcsR0FBT08sZUFBZSxDQUFDUSxPQUF2QixFQUFnQ2IsV0FBaEMsU0FBZ0RDLElBQWhELEVBQVQ7TUFBQSxDQUF0QjtJQUNEOztJQUVELElBQWlCa0IsUUFBakIsR0FBOEJULFdBQTlCLENBQVFHLE9BQVI7SUFFQU0sUUFBUSxDQUFDSixVQUFUO0lBQ0FJLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQnBCLFdBQWpCLEVBQThCO01BQUVxQixTQUFTLEVBQUUsSUFBYjtNQUFtQkMsT0FBTyxFQUFFO0lBQTVCLENBQTlCO0VBQ0QsQ0FYaUIsRUFZbEIsQ0FBQ2pCLGVBQUQsRUFBa0JLLFdBQWxCLEVBQStCWixHQUEvQixDQVprQixDQUFwQjtFQWVBLElBQU15QixVQUFVLEdBQUcsSUFBQU4sa0JBQUEsRUFBWSxZQUFNO0lBQ25DbkIsR0FBRyxDQUFDMEIsSUFBSixHQURtQyxDQUduQzs7SUFDQWhCLFVBQVUsQ0FBQ0ssT0FBWCxHQUFxQlgsU0FBckI7RUFDRCxDQUxrQixFQUtoQixDQUFDSixHQUFELEVBQU1VLFVBQU4sQ0FMZ0IsQ0FBbkI7RUFPQSxPQUFPLElBQUFELGNBQUEsRUFDTDtJQUFBLE9BQU1rQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxDQUFDVixXQUFELEVBQWNPLFVBQWQsQ0FBZCxDQUFOO0VBQUEsQ0FESyxFQUVMLENBQUNQLFdBQUQsRUFBY08sVUFBZCxDQUZLLENBQVA7QUFJRCJ9