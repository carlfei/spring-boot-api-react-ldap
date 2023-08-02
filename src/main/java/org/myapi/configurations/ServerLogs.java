package org.myapi.configurations;


import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.LoggerContext;
import ch.qos.logback.core.read.ListAppender;
import org.slf4j.LoggerFactory;

import java.util.List;

public class ServerLogs {

    public String getServerLogs() {
        LoggerContext context = (LoggerContext) LoggerFactory.getILoggerFactory();
        Logger rootLogger = context.getLogger(Logger.ROOT_LOGGER_NAME);
        ListAppender logAppender = (ListAppender) rootLogger.getAppender("FILE_APPENDER_NAME");

        List<String> logList = logAppender.list;


        //return convertToJSON(logList);
         return "ok";
    }


}
