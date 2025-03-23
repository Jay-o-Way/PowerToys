// Copyright (c) Microsoft Corporation
// The Microsoft Corporation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Security.Cryptography;
using System.Windows.Input;

using ManagedCommon;
using Microsoft.PowerToys.Settings.UI.Helpers;
using Microsoft.PowerToys.Settings.UI.Library;
using Microsoft.PowerToys.Settings.UI.ViewModels;
using Microsoft.UI.Xaml.Controls;
using Microsoft.Windows.ApplicationModel.Resources;
using Windows.System;

namespace Microsoft.PowerToys.Settings.UI.Controls
{
    public sealed partial class ColorFormatEditor : UserControl
    {
        public ColorFormatEditor()
        {
            InitializeComponent();
            LoadParameters();
        }

        public void LoadParameters()
        {
            ResourceLoader resourceLoader = ResourceLoaderInstance.ResourceLoader;
            ParametersItemsControl.ItemsSource = new List<ColorFormatParameter>
            {
                new() { Parameter = "%Re", Description = resourceLoader.GetString("Help_red") },
                new() { Parameter = "%Gr", Description = resourceLoader.GetString("Help_green") },
                new() { Parameter = "%Bl", Description = resourceLoader.GetString("Help_blue") },
                new() { Parameter = "%Al", Description = resourceLoader.GetString("Help_alpha") },
                new() { Parameter = "%Cy", Description = resourceLoader.GetString("Help_cyan") },
                new() { Parameter = "%Ma", Description = resourceLoader.GetString("Help_magenta") },
                new() { Parameter = "%Ye", Description = resourceLoader.GetString("Help_yellow") },
                new() { Parameter = "%Bk", Description = resourceLoader.GetString("Help_black_key") },
                new() { Parameter = "%Hu", Description = resourceLoader.GetString("Help_hue") },
                new() { Parameter = "%Si", Description = resourceLoader.GetString("Help_saturationI") },
                new() { Parameter = "%Sl", Description = resourceLoader.GetString("Help_saturationL") },
                new() { Parameter = "%Sb", Description = resourceLoader.GetString("Help_saturationB") },
                new() { Parameter = "%Br", Description = resourceLoader.GetString("Help_brightness") },
                new() { Parameter = "%In", Description = resourceLoader.GetString("Help_intensity") },
                new() { Parameter = "%Hn", Description = resourceLoader.GetString("Help_hueNat") },
                new() { Parameter = "%Ll", Description = resourceLoader.GetString("Help_lightnessNat") },
                new() { Parameter = "%Lc", Description = resourceLoader.GetString("Help_lightnessCIE") },
                new() { Parameter = "%Va", Description = resourceLoader.GetString("Help_value") },
                new() { Parameter = "%Wh", Description = resourceLoader.GetString("Help_whiteness") },
                new() { Parameter = "%Bn", Description = resourceLoader.GetString("Help_blackness") },
                new() { Parameter = "%Ca", Description = resourceLoader.GetString("Help_chromaticityA") },
                new() { Parameter = "%Cb", Description = resourceLoader.GetString("Help_chromaticityB") },
                new() { Parameter = "%Xv", Description = resourceLoader.GetString("Help_X_value") },
                new() { Parameter = "%Yv", Description = resourceLoader.GetString("Help_Y_value") },
                new() { Parameter = "%Zv", Description = resourceLoader.GetString("Help_Z_value") },
                new() { Parameter = "%Dv", Description = resourceLoader.GetString("Help_decimal_value_BGR") },
                new() { Parameter = "%Dr", Description = resourceLoader.GetString("Help_decimal_value_RGB") },
                new() { Parameter = "%Na", Description = resourceLoader.GetString("Help_color_name") },
            };

            ColorParametersItemsControl.ItemsSource = new List<ColorFormatParameter>
            {
                new() { Parameter = "b", Description = resourceLoader.GetString("Help_byte") },
                new() { Parameter = "h", Description = resourceLoader.GetString("Help_hexL1") },
                new() { Parameter = "H", Description = resourceLoader.GetString("Help_hexU1") },
                new() { Parameter = "x", Description = resourceLoader.GetString("Help_hexL2") },
                new() { Parameter = "X", Description = resourceLoader.GetString("Help_hexU2") },
                new() { Parameter = "f", Description = resourceLoader.GetString("Help_floatWith") },
                new() { Parameter = "F", Description = resourceLoader.GetString("Help_floatWithout") },
            };
        }

        private void NewColorName_TextChanged(object sender, TextChangedEventArgs e)
        {
            OnPropertyChanged();
        }

        private void NewColorFormatTextBox_TextChanged(object sender, TextChangedEventArgs e)
        {
            OnPropertyChanged();
        }

        public event EventHandler PropertyChanged;

        private void OnPropertyChanged()
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("PropertyChanged"));
        }
    }

#pragma warning disable SA1402 // File may only contain a single type
    public class ColorFormatParameter
#pragma warning restore SA1402 // File may only contain a single type
    {
        public string Parameter { get; set; }

        public string Description { get; set; }
    }
}
