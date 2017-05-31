﻿using Intranet.SeleniumTests.Framework;
using Microsoft.DotNet.PlatformAbstractions;
using OpenQA.Selenium;
using OpenQA.Selenium.PhantomJS;
using OpenQA.Selenium.Remote;
using System;
using Xunit;

namespace Intranet.SeleniumTests
{
    public class CakeTest : IDisposable
    {

        public CakeTest()
        {
            //Setup
        }

        public void Dispose()
        {
            //Teardown
            SeleniumDriver.driver.Quit();
        }


        [Theory]
        [InlineData("http://www.certaincy.com/", "Certaincy")]
        [InlineData("http://www.google.com", "Google")]
        public void CertaincyTest(string url, string keyword)
        {
            //driver = new PhantomJSDriver(ApplicationEnvironment.ApplicationBasePath);
            SeleniumDriver.driver = new PhantomJSDriver();
            SeleniumDriver.driver.Navigate().GoToUrl(url);
            Assert.True(SeleniumDriver.driver.Title.Contains(keyword));
        }
    }
}
