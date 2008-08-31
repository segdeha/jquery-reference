<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html"/>
	
	<xsl:template match="/">
		<div id="content">
			<xsl:apply-templates select="/docs/cat"/>
		</div>
	</xsl:template>
	
	<xsl:template match="/docs/cat">
		<xsl:apply-templates select="subcat"/>
	</xsl:template>
	
	<xsl:template match="subcat">
		<div class="subcat">
			<h2>
				<xsl:value-of select="@value"/>
			</h2>
			<xsl:apply-templates select="function"/>
			<xsl:apply-templates select="selector"/>
		</div>
	</xsl:template>

	<xsl:template match="function">
		<div class="function">
			<h3>
				<span class="returns">Returns: <xsl:value-of select="@return"/></span>
				<span class="name"><xsl:value-of select="@name"/></span>
				<span class="params">( <xsl:for-each select="./params">
					<xsl:choose>
						<xsl:when test="./@optional='true'"><span class="param optional">[<xsl:value-of select="@name"/>], </span></xsl:when>
						<xsl:otherwise><span class="param"><xsl:value-of select="@name"/></span>, </xsl:otherwise>
					</xsl:choose>
				</xsl:for-each> )</span>
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
					<div class="css">
						<xsl:value-of select="./css"/>
					</div>
					<div class="results">
						<xsl:value-of select="./results"/>
					</div>
				</div>
			</xsl:for-each>
		</div>
	</xsl:template>
	
	<xsl:template match="function">
		<div class="selector">
			<h3>
				<span class="returns">Returns: <xsl:value-of select="@return"/></span>
				<span class="name"><xsl:value-of select="@name"/></span>
				<span class="params">( <xsl:for-each select="./params">
					<xsl:choose>
						<xsl:when test="./@optional='true'"><span class="param optional">[<xsl:value-of select="@name"/>]</span></xsl:when>
						<xsl:otherwise><span class="param"><xsl:value-of select="@name"/></span></xsl:otherwise>
					</xsl:choose>
					<xsl:if test="position() != last()">, </xsl:if>
				</xsl:for-each> )</span>
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
					<div class="css">
						<xsl:value-of select="./css"/>
					</div>
					<div class="results">
						<xsl:value-of select="./results"/>
					</div>
				</div>
			</xsl:for-each>
		</div>
	</xsl:template>
	
</xsl:stylesheet>