package com.learnings.springangularintegration.config;

//import com.manh.mockserver.server.Server;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to JHipster.
 * <p>
 * Properties are configured in the application.yml file.
 */
@ConfigurationProperties(prefix = "proxy", ignoreUnknownFields = false)
public class ProxyProperties
{

    private String authUrl;

    private String url;

    private String clientId;

    private String clientSecret;

    private String username;

    private String password;

    private String organization;

//    private List<Server> components = new ArrayList<Server>();

//    public List<Server> getComponents()
//    {
//        return this.components;
//    }

    public String getAuthUrl()
    {
        return authUrl;
    }

    public void setAuthUrl(String authUrl)
    {
        this.authUrl = authUrl;
    }

    public String getUrl()
    {
        return url;
    }

    public void setUrl(String url)
    {
        this.url = url;
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

//    public void setComponents(List<Server> components)
//    {
//        this.components = components;
//    }

    public String getClientId()
    {
        return clientId;
    }

    public void setClientId(String clientId)
    {
        this.clientId = clientId;
    }

    public String getClientSecret()
    {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret)
    {
        this.clientSecret = clientSecret;
    }

    public String getOrganization()
    {
        return organization;
    }

    public void setOrganization(String organization)
    {
        this.organization = organization;
    }

    public ProxyProperties getProxyProperties(){
        return this;
    }
}
