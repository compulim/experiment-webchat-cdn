"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(_ref) {
  var cardPushButtonBackgroundColor = _ref.cardPushButtonBackgroundColor,
      cardPushButtonTextColor = _ref.cardPushButtonTextColor,
      accent = _ref.accent,
      paddingRegular = _ref.paddingRegular,
      primaryFont = _ref.primaryFont;
  return {
    '&.webchat__adaptive-card-renderer': {
      // Related to #4075.
      // Adaptive Cards assume its host is in "forced border-box" mode.
      // In CSS, the default is "content-box" mode.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing#values
      '& *': {
        boxSizing: 'border-box'
      },
      '& .ac-input, & .ac-inlineActionButton, & .ac-quickActionButton': {
        fontFamily: primaryFont
      },
      '& .ac-multichoiceInput': {
        padding: paddingRegular
      },
      '& .ac-pushButton': {
        appearance: 'none',
        backgroundColor: 'White',
        borderStyle: 'solid',
        borderWidth: 1,
        color: accent,
        fontWeight: 600,
        padding: paddingRegular
      },
      '& .ac-pushButton.style-destructive': {
        backgroundColor: '#E50000',
        color: 'white'
      },
      '& .ac-pushButton.style-destructive:hover, & .ac-pushButton.style-destructive:active': {
        backgroundColor: '#BF0000'
      },
      '& .ac-pushButton.style-positive': {
        backgroundColor: '#0078D7',
        color: 'white'
      },
      '& .ac-pushButton.style-positive:hover, & .ac-pushButton.style-positive:active': {
        backgroundColor: '#006ABC'
      },
      // The following styles are copied from :disabled via Chromium.
      '& .ac-pushButton, & input, & select, & textarea': {
        '&[aria-disabled="true"]': {
          backgroundColor: '#EBEBE4',
          borderColor: '#A9A9A9',
          borderStyle: 'solid',
          borderWidth: 1,
          color: '#545454'
        }
      },
      '& .ac-pushButton[aria-disabled="true"]': {
        backgroundColor: '#F0F0F0',
        color: '#6D6D6D'
      },
      '& .ac-pushButton[aria-pressed="true"]': {
        backgroundColor: cardPushButtonBackgroundColor,
        borderColor: cardPushButtonBackgroundColor,
        color: cardPushButtonTextColor
      },
      '& input[aria-disabled="true"]': {
        padding: '2px 1px'
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYXJkUHVzaEJ1dHRvbkJhY2tncm91bmRDb2xvciIsImNhcmRQdXNoQnV0dG9uVGV4dENvbG9yIiwiYWNjZW50IiwicGFkZGluZ1JlZ3VsYXIiLCJwcmltYXJ5Rm9udCIsImJveFNpemluZyIsImZvbnRGYW1pbHkiLCJwYWRkaW5nIiwiYXBwZWFyYW5jZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJib3JkZXJDb2xvciJdLCJzb3VyY2VSb290IjoiYnVuZGxlOi8vLyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0aXZlQ2FyZHMvU3R5bGVzL1N0eWxlU2V0L0FkYXB0aXZlQ2FyZFJlbmRlcmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGdWxsQnVuZGxlU3R5bGVPcHRpb25zIGZyb20gJy4uLy4uLy4uL3R5cGVzL0Z1bGxCdW5kbGVTdHlsZU9wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe1xuICBjYXJkUHVzaEJ1dHRvbkJhY2tncm91bmRDb2xvcixcbiAgY2FyZFB1c2hCdXR0b25UZXh0Q29sb3IsXG4gIGFjY2VudCxcbiAgcGFkZGluZ1JlZ3VsYXIsXG4gIHByaW1hcnlGb250XG59OiBGdWxsQnVuZGxlU3R5bGVPcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgJyYud2ViY2hhdF9fYWRhcHRpdmUtY2FyZC1yZW5kZXJlcic6IHtcbiAgICAgIC8vIFJlbGF0ZWQgdG8gIzQwNzUuXG4gICAgICAvLyBBZGFwdGl2ZSBDYXJkcyBhc3N1bWUgaXRzIGhvc3QgaXMgaW4gXCJmb3JjZWQgYm9yZGVyLWJveFwiIG1vZGUuXG4gICAgICAvLyBJbiBDU1MsIHRoZSBkZWZhdWx0IGlzIFwiY29udGVudC1ib3hcIiBtb2RlLlxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JveC1zaXppbmcjdmFsdWVzXG4gICAgICAnJiAqJzoge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgICAgfSxcblxuICAgICAgJyYgLmFjLWlucHV0LCAmIC5hYy1pbmxpbmVBY3Rpb25CdXR0b24sICYgLmFjLXF1aWNrQWN0aW9uQnV0dG9uJzoge1xuICAgICAgICBmb250RmFtaWx5OiBwcmltYXJ5Rm9udFxuICAgICAgfSxcblxuICAgICAgJyYgLmFjLW11bHRpY2hvaWNlSW5wdXQnOiB7XG4gICAgICAgIHBhZGRpbmc6IHBhZGRpbmdSZWd1bGFyXG4gICAgICB9LFxuXG4gICAgICAnJiAuYWMtcHVzaEJ1dHRvbic6IHtcbiAgICAgICAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdXaGl0ZScsXG4gICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgY29sb3I6IGFjY2VudCxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBwYWRkaW5nOiBwYWRkaW5nUmVndWxhclxuICAgICAgfSxcblxuICAgICAgJyYgLmFjLXB1c2hCdXR0b24uc3R5bGUtZGVzdHJ1Y3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFNTAwMDAnLFxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgfSxcblxuICAgICAgJyYgLmFjLXB1c2hCdXR0b24uc3R5bGUtZGVzdHJ1Y3RpdmU6aG92ZXIsICYgLmFjLXB1c2hCdXR0b24uc3R5bGUtZGVzdHJ1Y3RpdmU6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQkYwMDAwJ1xuICAgICAgfSxcblxuICAgICAgJyYgLmFjLXB1c2hCdXR0b24uc3R5bGUtcG9zaXRpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDc4RDcnLFxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgfSxcblxuICAgICAgJyYgLmFjLXB1c2hCdXR0b24uc3R5bGUtcG9zaXRpdmU6aG92ZXIsICYgLmFjLXB1c2hCdXR0b24uc3R5bGUtcG9zaXRpdmU6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA2QUJDJ1xuICAgICAgfSxcblxuICAgICAgLy8gVGhlIGZvbGxvd2luZyBzdHlsZXMgYXJlIGNvcGllZCBmcm9tIDpkaXNhYmxlZCB2aWEgQ2hyb21pdW0uXG5cbiAgICAgICcmIC5hYy1wdXNoQnV0dG9uLCAmIGlucHV0LCAmIHNlbGVjdCwgJiB0ZXh0YXJlYSc6IHtcbiAgICAgICAgJyZbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0nOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VCRUJFNCcsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjQTlBOUE5JyxcbiAgICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICBjb2xvcjogJyM1NDU0NTQnXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICcmIC5hYy1wdXNoQnV0dG9uW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjBGMEYwJyxcbiAgICAgICAgY29sb3I6ICcjNkQ2RDZEJ1xuICAgICAgfSxcblxuICAgICAgJyYgLmFjLXB1c2hCdXR0b25bYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjYXJkUHVzaEJ1dHRvbkJhY2tncm91bmRDb2xvcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNhcmRQdXNoQnV0dG9uQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBjb2xvcjogY2FyZFB1c2hCdXR0b25UZXh0Q29sb3JcbiAgICAgIH0sXG5cbiAgICAgICcmIGlucHV0W2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdJzoge1xuICAgICAgICBwYWRkaW5nOiAnMnB4IDFweCdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFZSx3QkFNWTtFQUFBLElBTHpCQSw2QkFLeUIsUUFMekJBLDZCQUt5QjtFQUFBLElBSnpCQyx1QkFJeUIsUUFKekJBLHVCQUl5QjtFQUFBLElBSHpCQyxNQUd5QixRQUh6QkEsTUFHeUI7RUFBQSxJQUZ6QkMsY0FFeUIsUUFGekJBLGNBRXlCO0VBQUEsSUFEekJDLFdBQ3lCLFFBRHpCQSxXQUN5QjtFQUN6QixPQUFPO0lBQ0wscUNBQXFDO01BQ25DO01BQ0E7TUFDQTtNQUNBO01BQ0EsT0FBTztRQUNMQyxTQUFTLEVBQUU7TUFETixDQUw0QjtNQVNuQyxrRUFBa0U7UUFDaEVDLFVBQVUsRUFBRUY7TUFEb0QsQ0FUL0I7TUFhbkMsMEJBQTBCO1FBQ3hCRyxPQUFPLEVBQUVKO01BRGUsQ0FiUztNQWlCbkMsb0JBQW9CO1FBQ2xCSyxVQUFVLEVBQUUsTUFETTtRQUVsQkMsZUFBZSxFQUFFLE9BRkM7UUFHbEJDLFdBQVcsRUFBRSxPQUhLO1FBSWxCQyxXQUFXLEVBQUUsQ0FKSztRQUtsQkMsS0FBSyxFQUFFVixNQUxXO1FBTWxCVyxVQUFVLEVBQUUsR0FOTTtRQU9sQk4sT0FBTyxFQUFFSjtNQVBTLENBakJlO01BMkJuQyxzQ0FBc0M7UUFDcENNLGVBQWUsRUFBRSxTQURtQjtRQUVwQ0csS0FBSyxFQUFFO01BRjZCLENBM0JIO01BZ0NuQyx1RkFBdUY7UUFDckZILGVBQWUsRUFBRTtNQURvRSxDQWhDcEQ7TUFvQ25DLG1DQUFtQztRQUNqQ0EsZUFBZSxFQUFFLFNBRGdCO1FBRWpDRyxLQUFLLEVBQUU7TUFGMEIsQ0FwQ0E7TUF5Q25DLGlGQUFpRjtRQUMvRUgsZUFBZSxFQUFFO01BRDhELENBekM5QztNQTZDbkM7TUFFQSxtREFBbUQ7UUFDakQsMkJBQTJCO1VBQ3pCQSxlQUFlLEVBQUUsU0FEUTtVQUV6QkssV0FBVyxFQUFFLFNBRlk7VUFHekJKLFdBQVcsRUFBRSxPQUhZO1VBSXpCQyxXQUFXLEVBQUUsQ0FKWTtVQUt6QkMsS0FBSyxFQUFFO1FBTGtCO01BRHNCLENBL0NoQjtNQXlEbkMsMENBQTBDO1FBQ3hDSCxlQUFlLEVBQUUsU0FEdUI7UUFFeENHLEtBQUssRUFBRTtNQUZpQyxDQXpEUDtNQThEbkMseUNBQXlDO1FBQ3ZDSCxlQUFlLEVBQUVULDZCQURzQjtRQUV2Q2MsV0FBVyxFQUFFZCw2QkFGMEI7UUFHdkNZLEtBQUssRUFBRVg7TUFIZ0MsQ0E5RE47TUFvRW5DLGlDQUFpQztRQUMvQk0sT0FBTyxFQUFFO01BRHNCO0lBcEVFO0VBRGhDLENBQVA7QUEwRUQifQ==