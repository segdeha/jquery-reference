<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	<xsl:preserve-space elements="*"/>
	
	<xsl:template match="/">
		<div id="content">
			<xsl:apply-templates select="/docs/cat"/>
		</div>
	</xsl:template>

	<xsl:template match="/docs/cat">
		<div class="cat">
			<h1>
				<xsl:value-of select="@value"/>
			</h1>
			<div class="subcat">
				<xsl:apply-templates select="subcat"/>
			</div>
		</div>
	</xsl:template>
	
	<xsl:template match="subcat">
		<h2>
			<xsl:value-of select="@value"/>
		</h2>
		<div class="function">
			<xsl:apply-templates select="function"/>
		</div>
	</xsl:template>

	<xsl:template match="function">
		<h3>
			<span class="returns">Returns: <xsl:value-of select="@return"/></span>
			<xsl:value-of select="@name"/>(
			<xsl:for-each select="./params">
				<xsl:choose>
					<xsl:when test="./@optional='true'">
						<span class="param optional">[<xsl:value-of select="@name"/>]</span>
					</xsl:when>
					<xsl:otherwise>
						<span class="param"><xsl:value-of select="@name"/></span>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:for-each>
			)
		</h3>
		<p class="desc">
			<xsl:value-of select="./desc"/>
		</p>
		<p class="longdesc">
			<xsl:value-of select="./longdesc"/>
		</p>
		<xsl:for-each select="./example">
			<div class="example">
				<div class="desc">
					<xsl:value-of select="./desc"/>
				</div>
				<div class="code">
					<xsl:value-of select="./code"/>
				</div>
				<div class="html">
					<xsl:value-of select="./html"/>
				</div>
				<div class="results">
					<xsl:value-of select="./results"/>
				</div>
			</div>
		</xsl:for-each>
	</xsl:template>
	
</xsl:stylesheet>