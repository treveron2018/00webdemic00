<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>USEFUL PROGRAMS:</h2>

<table border="1">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <xsl:for-each select="useful_programs/program">
    <tr>
    <td><xsl:value-of select="name"/></td>
    <td><xsl:value-of select="type"/></td>
    <td><xsl:value-of select="description"/></td>
    </tr>
  </xsl:for-each>
</table>

  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
