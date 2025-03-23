// Copyright (c) Microsoft Corporation
// The Microsoft Corporation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;

namespace Microsoft.PowerToys.Settings.UI.Controls;

public partial class ImageResizerDimensionsNumberBox : NumberBox
{
    public ImageResizerDimensionsNumberBox()
    {
        Loaded += (_, _) => UpdateDisplayText();

        ValueChanged += (_, _) => UpdateDisplayText();

        GotFocus += (s, e) =>
        {
            // Show "0" in the UI when focused on the empty value. This ensures that the spinbutton
            // controls are usable.
            if (Value is double.NaN)
            {
                Value = 0.0;
            }
        };

        LostFocus += (_, _) => UpdateDisplayText();
    }

    private void UpdateDisplayText()
    {
        if (FocusState == FocusState.Unfocused && Value == 0)
        {
            Text = string.Empty;
        }
    }
}
