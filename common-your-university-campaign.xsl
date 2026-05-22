<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE xsl:stylesheet [
<!ENTITY amp   "&#38;">
<!ENTITY copy   "&#169;">
<!ENTITY gt   "&#62;">
<!ENTITY hellip "&#8230;">
<!ENTITY laquo  "&#171;">
<!ENTITY lsaquo   "&#8249;">
<!ENTITY lsquo   "&#8216;">
<!ENTITY lt   "&#60;">
<!ENTITY nbsp   "&#160;">
<!ENTITY quot   "&#34;">
<!ENTITY raquo  "&#187;">
<!ENTITY rsaquo   "&#8250;">
<!ENTITY rsquo   "&#8217;">
]>

<!--
Implementations Skeleton - 01/10/2017

COMMMON STYLESHEET 
Imported by all page type-specific stylesheets, and imports utility stylesheets.
Defines html, xsl templates and functions used globally throughout the implementation
Defines outer html structure and common include content.

Contributors: MBoston
Last Updated: 5/2026
-->
<xsl:stylesheet version="3.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:ou="http://omniupdate.com/XSL/Variables"
    xmlns:fn="http://omniupdate.com/XSL/Functions"
    xmlns:ouc="http://omniupdate.com/XSL/Variables"
    exclude-result-prefixes="xsl xs ou fn ouc">

	<xsl:import href="_shared/template-matches.xsl"/>	
	<xsl:import href="_shared/snippets.xsl"/>
	<xsl:import href="_shared/snippets-test.xsl"/>
	<xsl:import href="_shared/components.xsl"/>
	<xsl:import href="_shared/variables-campaign.xsl"/>
	<xsl:import href="_shared/functions.xsl"/>
	<xsl:import href="_shared/breadcrumb.xsl"/>	
	<xsl:import href="_shared/galleries.xsl"/>
	<xsl:import href="_shared/forms.xsl"/>
	<xsl:import href="_dmc/_core/functions.xsl"/> <!-- enable dmc functionality -->
	
	<xsl:import href="_includes/headcode.xsl"/>

	<!-- Default: for HTML5 use below output declaration -->
	<xsl:output method="html" version="4.0" indent="yes" encoding="UTF-8" include-content-type="no" omit-xml-declaration="yes"/>
	
	<xsl:template match="/document">
  <xsl:variable name="currentPath" select="$ou:path" />

  <xsl:call-template name="page-directive"/>
  
  <xsl:if test="$ou:action = 'pub'">
    <xsl:text disable-output-escaping="yes" expand-text="no">&lt;% </xsl:text>
      OUC.GenericDMC generic = new OUC.GenericDMC();
      OUC.BlogsDMC blogs = new OUC.BlogsDMC();
    <xsl:text disable-output-escaping="yes" expand-text="no">%&gt;</xsl:text>
  </xsl:if>
		
		
  <xsl:call-template name="ie-conditionals" />
		<!-- begin html -->
		<html class="no-js" lang="en-US">
			<xsl:call-template name="ie-conditionals-end" />	
			<head>	
				<xsl:call-template name="content" />
 				<xsl:call-template name="common-headcode"/> <!--common headcode -->
 				<xsl:call-template name="template-headcode"/> 
 				<xsl:apply-templates select="headcode/node()"/> 
				<script type="text/javascript">
					var page_url="<xsl:value-of select="concat(string-join(remove(tokenize(substring($ou:httproot, 1), '/'), count(tokenize(substring($ou:httproot, 1), '/'))), '/'),$ou:path)"/>";
				</script>
				<link rel="stylesheet" href="https://use.typekit.net/kvb8umu.css"/>

        <!-- Header for Campaign Template -->
				<fgcuheader id="masthead" role="banner" class="redesign-fgcuheader">
					  <div class="middle-nav col-sm-24">
						  <a class="logo" href="{{d:2599896}}"><img alt="FGCU Logo" width="100%" height="66px" src="{{f:75151060}}" /></a>
						  <a class="mobilelogo" href="/"><img alt="FGCU Your University Logo" width="100%" height="66px" src="{{f:75151060}}" /></a>
					  </div>
				</fgcuheader>
				
			</head>
			<body class="{$body-class} campaign-page">
				 <!-- fgcuteam-gabriel DISABLED not needed anymore https://stackoverflow.com/a/33428040/5315239 <xsl:copy-of select="ou:include-file('/_resources/includes/facebook-sdk.html')"/> -->
				<xsl:apply-templates select="bodycode/node()"/> <!-- pcf -->
				<xsl:call-template name="common-header"/>		
				<xsl:call-template name="page-content"/> <!-- each page type has a unique version of this template -->		
				<xsl:call-template name="campaign-footcode"/>
        <!-- <xsl:call-template name="common-footer"/> -->
        <!-- <xsl:call-template name="template-footcode"/>
				<xsl:apply-templates select="footcode/node()"/>  -->
			</body>	
		</html>	
		<!-- end html -->
	</xsl:template>		
			
 	<xsl:template name="common-headcode">
		<title><xsl:value-of select="$page-title"/></title>
					
		<xsl:apply-templates select="/document/ouc:properties[@label='metadata']/meta[string-length(@content)>0]"/>

		<!--<xsl:call-template name="unparsed-include-file">
			<xsl:with-param name="path">/_resources/includes/headcode.html</xsl:with-param>
		</xsl:call-template>-->
		<xsl:if test="descendant::gallery">
			<xsl:copy-of select="ou:gallery-headcode($gallery-type)"/>			
		</xsl:if>
		<xsl:if test="descendant::ouform">
			<xsl:call-template name="form-headcode"/>
		</xsl:if>
		
		<xsl:if test="ou:textual-content(ou:pcf-param('preview-image')) != ''">
			<meta property="og:image" content="https://www.fgcu.edu{ou:pcf-param('preview-image')}" />			
		</xsl:if>
		<xsl:if test="/document/item/ouc:div[@label='image']/descendant::img/@src != ''">
			<meta property="og:image" content="https://www.fgcu.edu{/document/item/ouc:div[@label='image']/descendant::img/@src}" />
		</xsl:if>
				
		<xsl:if test="(not($banner-layout = 'video') or not($banner-layout = 'slider')) ">			
			<style>
				@media screen and (min-width: 1000px){
					.page-banner .desktop-banner {
						min-height: <xsl:value-of select="$banner-pixels"/> !important;
					}
				}
				
			</style>			
		</xsl:if>		
	</xsl:template>
	
	<xsl:template name="common-header">
		<a class="skip-link" href="#page-title">Skip to the content</a>	
		
		<xsl:if test="$ou:action = 'pub'">
			<xsl:copy-of select="ou:ssi('/_resources/includes/alert.html')" />
			
		</xsl:if>
		
		<xsl:if test="$ou:action = 'pub'">
			<xsl:copy-of select="ou:ssi('/_resources/includes/policy.html')" />
			
		</xsl:if>		
		
    <!-- <xsl:if test="$ou:action = 'pub'">
      <xsl:copy-of select="ou:ssi('/_resources/includes/header.html')" />		
		</xsl:if> -->

		<xsl:if test="$ou:action = 'pub'">
		<xsl:if test="ou:pcf-param('fab-enable') = 'true' or ou:pcf-param('options') = 'fab-enable'">
			<xsl:copy-of select="ou:ssi('/_resources/includes/header.inc.html')" />
		</xsl:if>
		</xsl:if>
	</xsl:template>
	 
	<!-- in case not defined in page type xsl -->
	<xsl:template name="page-content"><p>No template defined.</p></xsl:template><!-- leave for debugging purposes -->
	
	<!-- global elements -->
	<xsl:variable name="banner-extension" select="if(normalize-space($banner-image) != '') then concat('.', substring-after($banner-image, '.')) else ''" />
  <xsl:variable name="tablet-banner" select="if(normalize-space($banner-image) != '') then concat(replace($banner-image, $banner-extension, ''), '-tablet', $banner-extension) else '/_resources/images/hero-gradient.jpg'" />
  <xsl:variable name="mobile-banner" select="if(normalize-space($banner-image) != '') then concat(replace($banner-image, $banner-extension, ''), '-mobile', $banner-extension) else '/_resources/images/hero-gradient.jpg'" />
	<!-- banner region -->
	<xsl:template name="page-banner">
		<xsl:choose>
			<!-- video -->
			<xsl:when test="$banner-layout = 'video'">
				<xsl:choose>
					<xsl:when test="normalize-space($banner-image) != '' or normalize-space(ou:pcf-param('video-src')) != ''">
						<xsl:variable name="banner-extension" select="if(normalize-space($banner-image) != '') then concat('.', substring-after($banner-image, '.')) else ''" />		
						<xsl:variable name="tablet-banner" select="if(normalize-space($banner-image) != '') then concat(replace($banner-image, $banner-extension, ''), '-tablet', $banner-extension) else '/_resources/images/hero-gradient.jpg'" />
						<xsl:variable name="mobile-banner" select="if(normalize-space($banner-image) != '') then concat(replace($banner-image, $banner-extension, ''), '-mobile', $banner-extension) else '/_resources/images/hero-gradient.jpg'" />
						<xsl:variable name="video-src" select="ou:pcf-param('video-src')" />
						<xsl:choose>
							<xsl:when test="$ou:action = 'pub'">
								<xsl:choose>
									<!-- vimeo -->
									<xsl:when test="contains($video-src, '.mp4') or contains($video-src, 'vimeo.com/external/') or contains($video-src, $domain) or starts-with($video-src, '/')">
										<header id="page-title" class="page-banner video common">
											<h1 id="vid-overlay" ><strong>Your</strong> University</h1>
											<div class="desktop-banner no-bg" style="background-image: url({$banner-image})">
												<div class="tablet-banner no-bg" style="background-image: url({$tablet-banner})">
													<div id="mobileBanner" class="mobile-banner no-bg" style="background-image: url({$mobile-banner})">								
														<video id="hero-video" class="hero-video ou-video-hide-mobile" style="width: 100%; height: auto; max-height: 526px;" autoplay="autoplay" loop="loop" preload="auto" muted="muted" alt="{ou:pcf-param('video-alt')}">
															<data-src src="{$video-src}" type="video/mp4" media="screen and (min-width: 1000px)" />
														</video>
														<script>
															//Add manual Play due to Safari blocking autoplay
															document.getElementById('hero-video').play();															
														</script>
														<div id="video-controls">				
															<button class="icon-pause" id="play-pause" aria-label="Play/Pause decorative video" title="Play/Pause decorative video" ></button>
														</div>

													</div>
												</div>
											</div>
										</header><!-- .hero -->
									</xsl:when>
									<xsl:otherwise>
										<header id="page-title" class="page-banner hero video">
											<div id="hero-video" class="hero-video{if (contains($video-src, 'vimeo.com')) then ' vimeo ' else ''} ou-video-hide-mobile" style="height: auto; width: 100%;" data-video-src="{$video-src}">
												<iframe frameborder="0" allowfullscreen="allowfullscreen" title="{ou:pcf-param('video-alt')}"></iframe>                    
											</div>
											<div class="video-overlay-container" id="ou-video-container">
												<h1 class="ou-hide-heading"><strong>Your</strong> University</h1>
												<div class="desktop-banner no-bg" style="background-image: url({$banner-image})">
													<div class="tablet-banner no-bg" style="background-image: url({$tablet-banner})">
														<div class="mobile-banner no-bg" style="background-image: url({$mobile-banner})">	
															<!-- added id and autoplay per request from iFactory -->
															<button class="play-button" style="display: none;" id="ou-autoplay-video">Play Video</button>
															
														</div>
													</div>
												</div>
											</div>
										</header><!-- .hero -->
									</xsl:otherwise>
								</xsl:choose>
							</xsl:when>
							<xsl:otherwise>
								<header id="page-title" class="page-banner">
									<div style="{$message-styling-info}">                        								                                     
										<p style="padding-bottom: 100px; margin-bottom: 0px; font-size: 15px;"><strong>Video displays on production only.</strong></p>
									</div>
								</header>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:when>
					<xsl:otherwise>
						<xsl:if test="$ou:action != 'pub'">
							<header id="page-title" class="page-banner">
								<div style="{$message-styling-info}">                        								                                     
									<p style="padding-bottom: 100px; margin-bottom: 0px; font-size: 15px;"><strong>Please Select a Banner Image and add a Video URL to page properties.</strong></p>
								</div>
							</header>
						</xsl:if>
						<xsl:if test="$ou:action = 'pub'">
							<header id="page-title" class="page-banner">
								<xsl:if test="$banner-title != ''">
									<h1><strong>Your</strong> University</h1>
                </xsl:if>
                <xsl:if test="$banner-title = ''">
                  <h1 style="opacity: 0;"><strong>Your</strong> University</h1>
                </xsl:if>
                <xsl:if test="ou:textual-content(story-content/ouc:div[@label='title']) != ''">
                  <div class="byline">
                    <span class="time"><xsl:value-of select="story-content/ouc:div[@label='title']"/></span>											
                  </div>
                </xsl:if>
								<div class="desktop-banner">
									<div class="tablet-banner">
										<div class="mobile-banner">
										</div>
									</div>
								</div>								
							</header><!-- .hero -->
						</xsl:if>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<!-- slider -->
			<xsl:when test="$banner-layout = 'slider'">
				<xsl:apply-templates select="ouc:div[@label='page-slider']" />
				<xsl:if test="not(ouc:div[@label='page-slider']/descendant::gallery)">			
					<header id="page-title" class="page-banner">
						<xsl:if test="$banner-title != ''">
              <h1><strong>Your</strong> University</h1>
              </xsl:if>
              <xsl:if test="$banner-title = ''">
                <h1 style="opacity: 0;"><xsl:value-of select="$page-title" /></h1>
              </xsl:if>
              <xsl:if test="ou:textual-content(story-content/ouc:div[@label='title']) != ''">
                <div class="byline">
                  <span class="time"><xsl:value-of select="story-content/ouc:div[@label='title']"/></span>											
                </div>
              </xsl:if>
						<div class="desktop-banner">
							<div class="tablet-banner">
								<div class="mobile-banner">
								</div>
							</div>
						</div>
					</header><!-- .hero -->		
				</xsl:if>				
			</xsl:when>
			<!-- banner -->			
			<xsl:when test="$banner-layout = 'banner'">
				<xsl:choose>
					<xsl:when test="normalize-space($banner-image) != ''">
						<!-- image -->				
						<xsl:variable name="banner-extension" select="concat('.', substring-after($banner-image, '.'))" />			
						<xsl:variable name="tablet-banner" select="concat(replace($banner-image, $banner-extension, ''), '-tablet', $banner-extension) " />
						<xsl:variable name="mobile-banner" select="concat(replace($banner-image, $banner-extension, ''), '-mobile', $banner-extension) " />
						
						<header id="page-title" class="page-banner">
							<xsl:if test="$banner-title != ''">
								
												<!-- BEGIN TITLE CASE FOR H1 -->
												<!-- Convert the value of $banner-title to title case and assign the result to a variable called $titleCase -->
												<xsl:variable name="titleCase">
													<!-- Split the text content into individual words -->
													<xsl:variable name="words" select="tokenize($banner-title, '\s+')"/>

													<!-- Capitalize the first word and add a space after it -->
													<xsl:variable name="firstWord" select="$words[1]"/>
													<xsl:variable name="rest" select="$words[position() &gt; 1]"/>
													<xsl:value-of select="concat(upper-case(substring($firstWord, 1, 1)), substring($firstWord, 2), ' ')"/>

													<!-- Loop through each remaining word in the text content -->
													<xsl:for-each select="$rest">

														<!-- Check if the word is an exception -->
														<xsl:choose>
															<xsl:when test="contains(concat(',', normalize-space($exceptions), ','), concat(',', lower-case(.), ','))">
																<!-- If the word is an exception, output it in lowercase -->
																<xsl:value-of select="lower-case(.)"/>
															</xsl:when>
															<xsl:otherwise>
																<!-- If the word is not an exception, convert it to title case -->
																<xsl:variable name="firstChar" select="substring(., 1, 1)"/>
																<xsl:variable name="rest" select="substring(., 2)"/>
																<xsl:value-of select="concat(upper-case($firstChar), $rest)"/>
															</xsl:otherwise>
														</xsl:choose>

														<!-- Output a space after the word, unless it is the last word -->
														<xsl:if test="position() != last()">
															<xsl:text> </xsl:text>
														</xsl:if>
													</xsl:for-each>
												</xsl:variable>
												<!-- END TITLE CASE FOR H1 -->
												<div class="hero-text">
													<h1><xsl:value-of select="$titleCase"/></h1>
																<xsl:if test="ou:textual-content(story-content/ouc:div[@label='title']) != ''">
													<div class="byline">
														<span class="time"><xsl:value-of select="story-content/ouc:div[@label='title']"/></span>											
													</div>
												</xsl:if>
												</div>
													<!-- <h1><xsl:value-of select="$banner-title" /></h1> -->
											</xsl:if>
											<xsl:if test="$banner-title = ''">
												<h1 style="opacity: 0;"><xsl:value-of select="$page-title" /></h1>
											</xsl:if>
							<div class="desktop-banner" style="background-image: url({$banner-image})">
								<div class="tablet-banner" style="background-image: url({$tablet-banner})">
									<div class="mobile-banner" style="background-image: url({$mobile-banner})">
									</div>
								</div>
							</div>
						</header><!-- .hero -->
					</xsl:when>
					<xsl:otherwise>
						<xsl:if test="$ou:action != 'pub'">
							<header id="page-title" class="page-banner">
								<div style="{$message-styling-info}">                        								                                     
									<p style="padding-bottom: 100px; margin-bottom: 0px; font-size: 15px;"><strong>Please Select a Banner Image.</strong></p>
								</div>
							</header>
						</xsl:if>
						<xsl:if test="$ou:action = 'pub'">
							<header id="page-title" class="page-banner">
								<xsl:if test="$banner-title != ''">
												<h1><xsl:value-of select="$banner-title" /></h1>
											</xsl:if>
											<xsl:if test="$banner-title = ''">
												<h1 style="opacity: 0;"><xsl:value-of select="$page-title" /></h1>
											</xsl:if>
								<div class="desktop-banner">
									<div class="tablet-banner">
										<div class="mobile-banner">
										</div>
									</div>
								</div>
							</header><!-- .hero -->
						</xsl:if>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<!-- no image -->
			<xsl:otherwise>							
				<header id="page-title" class="page-banner">
					<xsl:if test="$banner-title != ''">
									<h1><xsl:value-of select="$banner-title" /></h1>
								</xsl:if>
								<xsl:if test="$banner-title = ''">
									<h1 style="opacity: 0;"><xsl:value-of select="$page-title" /></h1>
								</xsl:if>
					<div class="desktop-banner">
						<div class="tablet-banner">
							<div class="mobile-banner">
							</div>
						</div>
					</div>
				</header><!-- .hero -->					
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
		
	<!-- head/foot code -->
	<xsl:template name="template-headcode"/>
	<!-- 	<xsl:template name="template-footcode"/> -->
	
  <xsl:template name="campaign-footcode">
    <!-- FOOTER -->
    <footer class="fgcu-footer">
      <div class="footer-container content-container">
        <!-- Left column -->
        <div class="footer-left">
          <a href="https://www.fgcu.edu/">
          <img src="/_resources/images/logo/fgcu-lettermark-white-395w.png" alt="FGCU Logo" width="220" height="95px" role="img"></img>
            <p>Florida Gulf Coast University</p>
            </a>
          <div class="row" style="display: flex; align-items: center;">
          <div class="col-sm-2">
            <span>
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="18" viewBox="0 0 13 18" role="img" focusable="false"   aria-hidden="true"><g transform="translate(-386 -3528)"><path d="M392.3 3536.55a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zm0-8.55a6.3 6.3 0 0 0-6.3 6.3c0 4.72 6.3 11.7 6.3 11.7s6.3-6.97 6.3-11.7a6.3 6.3 0 0 0-6.3-6.3z"></path></g></svg>
            </span>
          </div>
          <div class="col-sm-22"><a href="https://goo.gl/maps/J9tByRkQ47ys683h7"><span class="footer-info">10501 FGCU Blvd. S.<br></br>Fort Myers, FL 33965</span></a></div>	
          </div>
          <div class="row" style="display: flex; align-items: center;">
            <div class="col-sm-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M2.63867 0.661133C3.4253 0.180418 4.4526 0.428315 4.93359 1.21484L7.06836 4.70508C7.54913 5.49167 7.3011 6.51894 6.51465 7L5.82617 7.42188C5.74151 7.47364 5.65435 7.51925 5.56738 7.56348L5.03223 8.09766C4.66367 8.48268 4.66313 9.08913 5.0293 9.47559L10.4014 14.8467C10.7935 15.2114 11.4063 15.204 11.7881 14.8223L12.3076 14.3018L12.3086 14.3027C12.3796 14.1249 12.464 13.95 12.5625 13.7793L12.8154 13.3418C13.2765 12.5433 14.2971 12.2695 15.0957 12.7305L19.1621 15.0781C19.9605 15.5391 20.2341 16.5599 19.7734 17.3584L19.5205 17.7959C18.9722 18.7456 18.0946 19.3856 17.1152 19.6572C15.3892 20.3624 13.2177 20.3422 10.9316 19.5801C8.37315 18.727 5.85307 17.0087 3.8584 14.7578C2.22943 12.9195 1.0448 10.8315 0.444336 8.77051C0.410813 8.67052 0.381106 8.56964 0.361328 8.4668C0.266135 8.10591 0.187968 7.74656 0.129883 7.38965C-0.0590426 6.22851 -0.0396171 5.13467 0.173828 4.15039C0.204615 3.06176 0.712677 2.00598 1.62012 1.30859C1.63429 1.29347 1.64775 1.27767 1.66211 1.2627L1.6709 1.27051C1.76008 1.20435 1.85267 1.14108 1.94922 1.08203L2.63867 0.661133Z" fill="white"></path></svg>
              </span>
            </div>
            <div class="col-sm-22"><a href="tel:+12395901000"><span class="footer-info">239-590-1000</span></a></div>	
          </div>
        </div>

        <!-- Right column -->
        <div class="footer-right">
          <nav class="footer-nav">
            <a href="/admissionsandaid/">Apply</a>
            <a href="/about/contactus">Contact</a>
            <a href="/newsroom/contact-us">Press</a>
            <a href="/jobs/">Careers</a>
          </nav>
          <div class="footer-social">
            <a href="https://www.facebook.com/FloridaGulfCoastUniversity/" target="_blank"><img src="{{f:76697549}}" alt="Facebook" width="95" height="95px" role="img"></img></a>
            <a href="https://www.instagram.com/fgcu/" target="_blank"><img src="{{f:76697547}}" alt="Instagram" width="95" height="95px" role="img"></img></a>
            <a href="https://x.com/fgcu/" target="_blank"><img src="{{f:76697550}}" alt="X" width="95" height="95px" role="img"></img></a>
            <a href="https://www.youtube.com/user/fgcu" target="_blank"><img src="{{f:76697546}}" alt="Youtube" width="95" height="95px" role="img"></img></a>
            <a href="https://www.linkedin.com/school/florida-gulf-coast-university/" target="_blank"><img src="{{f:76697548}}" alt="Linkedin" width="95" height="95px" role="img"></img></a>
            <a href="https://fgcu360.com/" target="_blank"><img src="{{f:59445538}}" alt="FGCU360" width="95" height="95px" role="img"></img></a>
          </div>
          <nav class="footer-copyright">
            <p style="font-size">Copyright <a href="https://a.cms.omniupdate.com/11/#oucampus/fgcu/www/browse/staging/your-university">&copy;</a>2025 FGCU. All Rights Reserved</p>
          </nav>
        </div>
      </div>

    </footer>
  </xsl:template>
		
	<!-- common utility templates -->
	<xsl:template name="page-directive">
		<xsl:if test="($ou:action = 'pub') or ($ou:action = 'cmp')">
			<xsl:text disable-output-escaping="yes">&lt;%@ Page Language="C#"  Debug="false" %&gt;&lt;% OUC.Common.setPageCache(); %&gt;</xsl:text>			
		</xsl:if>
		<xsl:text disable-output-escaping="yes">&lt;!doctype html&gt;</xsl:text>
	</xsl:template>
	
	<!-- add <aspx> tag support for parsing embed aspx code in .pcf files. //fgcuteam-gabriel -->
	<xsl:template match="p[descendant::aspx]" priority="2">
		<xsl:apply-templates select="descendant::aspx"/>
	</xsl:template>
	<xsl:template match="aspx[$ou:action='pub']">		
		<xsl:text disable-output-escaping="yes">&lt;%</xsl:text>
		<xsl:value-of select="." disable-output-escaping="yes" />		
		<xsl:text disable-output-escaping="yes">%&gt;</xsl:text>		
	</xsl:template>
	
	<!-- adds opening internet explorer conditionals -->	
	<xsl:template name="ie-conditionals">
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>!--[if lt IE 7]<xsl:text disable-output-escaping="yes">&gt;</xsl:text> 
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en-US"<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>![endif]--<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>!--[if IE 7]<xsl:text disable-output-escaping="yes">&gt;</xsl:text>        
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>html class="no-js lt-ie9 lt-ie8" lang="en-US"<xsl:text disable-output-escaping="yes">&gt;</xsl:text> 
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>![endif]--<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>!--[if IE 8]<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>html class="no-js lt-ie9" lang="en-US"<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>![endif]--<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>!--[if gt IE 8]<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>!--<xsl:text disable-output-escaping="yes">&gt;</xsl:text>
	</xsl:template>
	
	<!-- add closing internet explorer conditionals -->
	<xsl:template name="ie-conditionals-end">
		<xsl:text disable-output-escaping="yes">&lt;</xsl:text>!--[endif]--<xsl:text disable-output-escaping="yes">&gt;</xsl:text>		
	</xsl:template>
		
</xsl:stylesheet>