﻿using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intranet.Selenium.Framework
{
    public class SeleniumNavigate
    {
        private readonly IWebDriver _driver;

        public SeleniumNavigate(IWebDriver driver)
        {
            _driver = driver;
        }

        public void GoToUrl(string url)
        {
            _driver.Navigate().GoToUrl(url);
        }

        public void Refresh()
        {
            _driver.Navigate().Refresh();
        }

        public void GoBack()
        {
            _driver.Navigate().Back();
        }

        public void GoForward()
        {
            _driver.Navigate().Forward();
        }

        public void ScrollToElement(IWebElement target)
        {
            ((IJavaScriptExecutor)_driver).ExecuteScript("arguments[0].scrollIntoView(true)", target);
        }
    }
}
