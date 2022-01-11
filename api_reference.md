/constituency
    General listing of constituencies with all attributes
        Used by Headerbar (needs Name and Id)
            ./components/headbar.js

/constituency/<constituency_id>
    General listing of specific constituency with all attributes
        Used by constituency page (needs Name and Description)
            ./components/constituency.js

/constituency/<constituency_id>/demography
    Formulation of demography statistics for a constituency
        Used by constituency page to display each statistic set in a table (needs all attributes)
            ./components/constituency.js

/constituency/<constituency_id>/candidates
    General listing of candidates in that constituency currently running
        Used by constituency page to display each candidate (needs Id, Name, Tagline, if they're currently Elected)
            ./components/constituency.js

/candidate
    General listing of candidates with all attributes
/candidate/<candidate_id>
    General listing of specific candidate with all attributes
        Used by candidate page (needs Name, Tagline, and all other attributes)
            ./components/candidate.js

/candidate/<candidate_id>/policies
    General listing of policies that candidate is using part of their platform
        Used by candidate page (needs Description, Category)
            ./components/candidate.js

/candidate/<candidate_id>/votehistory
    General listing of policies that candidate has voted on in assemblies
        Used by candidate page (needs Description, Category, Vote, Assembly ID)
            ./components/candidate.js

/election/<latest|election_id>?constituency=<constituency_id>
    Formulation of current votes per candidate in a constituency
        Used by constituency page to display the current election standings  (needs Name of candidate, current Votes)
            ./components/constituency.js

/newsfeed/latest
    Present 10 latest messages in news feed table
        Used by ticker tape to display the latest news (needs Message)
            ./components/tickertape.js

/assembly/<latest|assembly_id>/members
    Listing of all members of the current assembly
        Used by assembly page to display the assembly (needs constituency Name, constituency ID, candidate Name, candidate ID, candidate policy Description)
            ./components/assembly.js

/assemblyfeed/<latest|assembly_id>
    Present all messages of defined assembly feed
        Used by assembly page to display the assembly's feed (needs Message, Style, Parent ID, Candidate Name)
            ./components/assembly.js
